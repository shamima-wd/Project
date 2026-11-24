type ServicePageProps = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
};

export default function ServicePage({
  number,
  title,
  subtitle,
  description,
  features,
}: ServicePageProps) {
  return (
    <main className="detail-page">
      <header className="detail-header">
        <a href="/" className="detail-brand">
          NORDIC
          <span>DIGITAL COMMERCE</span>
        </a>
        <a href="/#contact" className="detail-contact">
          Get in touch ↗
        </a>
      </header>

      <section className="detail-hero">
        <a href="/#services" className="detail-back">
          ← Back to all services
        </a>

        <p className="detail-eyebrow">
          SERVICE {number} · NORDIC DIGITAL COMMERCE
        </p>

        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p className="detail-description">{description}</p>

        <a href="/#contact" className="detail-button">
          Discuss your project ↗
        </a>
      </section>

      <section className="detail-content">
        <p className="detail-eyebrow">WHAT WE OFFER</p>
        <h2>Practical solutions for your business.</h2>

        <div className="detail-feature-grid">
          {features.map((feature, index) => (
            <article className="detail-feature" key={feature}>
              <span>0{index + 1}</span>
              <h3>{feature}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-bottom">
        <p>Have an idea to explore?</p>
        <a href="/#contact">Contact Nordic Digital Commerce →</a>
      </section>

      <footer className="detail-footer">
        © 2026 Nordic Digital Commerce
        <a href="/">Return to homepage</a>
      </footer>
    </main>
  );
}
