import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nordic Digital Commerce | Digital Solutions from Denmark",
  description:
    "Nordic Digital Commerce is developing web development, e-commerce and digital product solutions from Denmark, with an international outlook.",
  applicationName: "Nordic Digital Commerce",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
