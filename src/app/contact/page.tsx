import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Nordic Digital Commerce",
  description:
    "Contact Nordic Digital Commerce in Denmark about web development, e-commerce and digital products.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <a
          className="contact-brand"
          href="/"
          aria-label="Nordic Digital Commerce home"
        >
          NORDIC
          <span>DIGITAL COMMERCE</span>
        </a>
        <a className="contact-home-link" href="/">
          ← Back to home
        </a>
      </header>

      <section className="contact-intro">
        <p className="contact-eyebrow">LET’S TALK</p>
        <h1>Tell us about your project.</h1>
        <p>
          Have a website idea, an e-commerce project, or a digital product you
          want to explore? Send us a message.
        </p>
      </section>

      <div className="contact-layout">
        <section
          className="contact-details"
          aria-labelledby="business-details-title"
        >
          <p className="contact-eyebrow">BUSINESS DETAILS</p>
          <h2 id="business-details-title">Nordic Digital Commerce</h2>

          <dl>
            
            <div>
              <dt>Registered address</dt>
              <dd>
                Værebrovej 96, 3. 8
                <br />
                2880 Bagsværd
                <br />
                Denmark
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:infonordicdigitalcommerce@gmail.com">
                  infonordicdigitalcommerce@gmail.com
                </a>
              </dd>
            </div>
          </dl>

          <p className="contact-direct-note">
            Prefer email? You can contact us directly at the address above.
          </p>
        </section>

        <section
          className="contact-form-panel"
          aria-labelledby="contact-form-title"
        >
          <p className="contact-eyebrow">CONTACT FORM</p>
          <h2 id="contact-form-title">Send an enquiry</h2>
          <ContactForm />
        </section>
      </div>

      <footer className="contact-footer">
        <span>© 2026 Nordic Digital Commerce</span>
        <a href="/">Return to homepage</a>
      </footer>
    </main>
  );
}
