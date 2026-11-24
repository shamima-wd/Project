"use client";

import { useState, type FormEvent } from "react";

type FieldName = "name" | "email" | "subject" | "message";
type FieldErrors = Partial<Record<FieldName, string[]>>;

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: FieldName, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors ?? {});
        setStatus("error");
        setStatusMessage(
          result.message ?? "We couldn't send your message. Please try again.",
        );
        return;
      }

      setStatus("success");
      setStatusMessage(result.message);
      setValues(initialValues);
    } catch {
      setStatus("error");
      setStatusMessage(
        "A connection error occurred. Please try again or email infonordicdigitalcommerce@gmail.com directly.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          required
        />
        {errors.name?.[0] && (
          <p className="field-error" id="contact-name-error">
            {errors.name[0]}
          </p>
        )}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          required
        />
        {errors.email?.[0] && (
          <p className="field-error" id="contact-email-error">
            {errors.email[0]}
          </p>
        )}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          value={values.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={
            errors.subject ? "contact-subject-error" : undefined
          }
          required
        />
        {errors.subject?.[0] && (
          <p className="field-error" id="contact-subject-error">
            {errors.subject[0]}
          </p>
        )}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">How can we help?</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          required
        />
        {errors.message?.[0] && (
          <p className="field-error" id="contact-message-error">
            {errors.message[0]}
          </p>
        )}
      </div>

      <p
        className={`form-status form-status--${status}`}
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
      >
        {statusMessage}
      </p>

      <button
        className="contact-submit"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send message"}
        {status === "loading" ? null : <span aria-hidden="true"> ↗</span>}
      </button>

      <p className="contact-form-note">
        Your details will be used to respond to your enquiry.
      </p>
    </form>
  );
}
