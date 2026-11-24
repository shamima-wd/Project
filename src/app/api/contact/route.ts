import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email address is too long."),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(150, "Subject must be 150 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(5000, "Message must be 5,000 characters or fewer."),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "The request was not valid. Please try again." },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Please correct the highlighted fields.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  // Never pretend a message was sent when email is not configured.
  if (!apiKey || !fromEmail) {
    console.error("Contact email is not configured.");
    return NextResponse.json(
      {
        message:
          "The contact form is not ready to send messages yet. Please email infonordicdigitalcommerce@gmail.com directly.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = result.data;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["infonordicdigitalcommerce@gmail.com"],
      replyTo: email,
      subject: `Website enquiry: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error || !data?.id) {
      console.error("Resend did not accept the contact email:", error);
      return NextResponse.json(
        {
          message:
            "We couldn't send your message right now. Please email infonordicdigitalcommerce@gmail.com directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message:
        "Your message was accepted for sending. Thank you for contacting Nordic Digital Commerce.",
    });
  } catch (error) {
    console.error("Contact email request failed:", error);
    return NextResponse.json(
      {
        message:
          "We couldn't send your message right now. Please email infonordicdigitalcommerce@gmail.com directly.",
      },
      { status: 502 },
    );
  }
}
