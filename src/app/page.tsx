const services = [
  {
    number: "01",
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Responsive, accessible websites designed to communicate your value and support your business goals.",
    tags: ["Business websites", "Next.js", "Responsive design"],
  },
  {
    number: "02",
    title: "E-commerce Solutions",
    href: "/services/e-commerce",
    description:
      "Digital storefronts and online shopping experiences designed around clear product information and usability.",
    tags: ["WooCommerce", "Online stores", "User experience"],
  },
  {
    number: "03",
    title: "Digital Products",
    href: "/services/digital-products",
    description:
      "A developing range of digital resources, templates and tools for individuals and businesses.",
    tags: ["Digital templates", "Online resources", "Digital tools"],
  },
];

const principles = [
  {
    number: "01",
    title: "Nordic simplicity",
    description:
      "Clear layouts, considered typography and straightforward digital experiences.",
  },
  {
    number: "02",
    title: "Practical technology",
    description:
      "Choosing suitable tools and building solutions around real business needs.",
  },
  {
    number: "03",
    title: "International outlook",
    description:
      "Building from Denmark with an ambition to explore opportunities in wider markets.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Nordic Digital Commerce home"
        >
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M8 35V13L24 29V13L40 29V13" />
              <path d="M8 35H40" />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>NORDIC</strong>
            <span>DIGITAL COMMERCE</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#direction">Our direction</a>
          <a href="/contact">Contact</a>
        </nav>

        <a className="header-cta" href="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            DENMARK · DIGITAL
          </div>

          <h1>
            Thoughtful technology.
            <br />
            <span>Better digital commerce.</span>
          </h1>

          <p className="hero-description">
            Nordic Digital Commerce is developing digital solutions for
            businesses, from modern websites to e-commerce experiences and
            practical digital products.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#services">
              Explore our services <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#about">
              Discover our approach <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Built in Denmark. Open to international opportunities.
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Abstract digital network illustration"
        >
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-core">
            <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <path d="M16 70V30L50 61V30L84 61V30" />
              <path d="M16 70H84" />
            </svg>
          </div>
          <span className="visual-label label-top">DIGITAL SYSTEMS</span>
          <span className="visual-label label-bottom">
            DESIGNED WITH PURPOSE
          </span>
          <span className="visual-cross cross-one">+</span>
          <span className="visual-cross cross-two">+</span>
        </div>

        <div className="hero-index">
          <span>01 / 03</span>
          <span className="index-rule" />
          <span>OUR APPROACH</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-wrap intro-inner">
          <p>
            We combine <strong>clean design</strong>, practical development and
            an international mindset to explore better ways of doing business
            online.
          </p>
          <span className="intro-symbol" aria-hidden="true">
            ✳
          </span>
        </div>
      </section>

      <section className="section-wrap services-section" id="services">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE ARE BUILDING</span>
            <h2>
              Digital solutions for
              <br />
              modern business.
            </h2>
          </div>
          <p>
            A focused starting point for useful, accessible and well-designed
            digital experiences.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <a
                className="service-card-link"
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="card-top">
                  <span className="card-number">{service.number}</span>
                  <span className="card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="commerce-opportunity" id="commerce-platforms">
        <div className="section-wrap commerce-inner">
          <div className="commerce-copy">
            <span className="eyebrow">OUR E-COMMERCE VISION</span>

            <h2>
              E-commerce platforms
              <br />
              for growing businesses.
            </h2>

            <p>
              We are building our capabilities in digital commerce, from online
              storefronts and product catalogues to industry-focused digital
              experiences. Our long-term ambition is to explore scalable
              solutions for businesses operating across different sectors.
            </p>

            <a className="button button-dark" href="/services/e-commerce">
              Explore e-commerce solutions <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="commerce-points">
            <article>
              <span>01</span>
              <div>
                <h3>Online retail</h3>
                <p>
                  Clear product catalogues and intuitive online shopping
                  experiences.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Industry-focused solutions</h3>
                <p>
                  Exploring digital commerce opportunities in areas such as food
                  and hospitality.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Scalable technology</h3>
                <p>
                  Planning flexible digital foundations that can develop
                  alongside business needs.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div className="about-heading">
            <span className="eyebrow eyebrow-light">ABOUT THE BUSINESS</span>
            <h2>
              Rooted in the
              <br />
              Nordic approach.
            </h2>
            <div className="gold-rule" />
          </div>
          <div className="about-copy">
            <p className="about-lead">
              We believe digital products should make complex things feel
              simpler.
            </p>
            <p>
              Nordic Digital Commerce is being developed in Denmark with a focus
              on web development, e-commerce technology and digital products.
              Our aim is to build a useful, sustainable business by creating
              solutions that address real customer needs.
            </p>
            <p>
              We are also exploring the potential to serve businesses in
              additional markets, including Saudi Arabia, as the business
              develops and the appropriate opportunities arise.
            </p>
            <a className="light-link" href="#direction">
              Read about our direction <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-wrap direction-section" id="direction">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR PRINCIPLES</span>
            <h2>
              Small details.
              <br />A bigger picture.
            </h2>
          </div>
          <p>
            The principles guiding how we plan, design and develop our digital
            business.
          </p>
        </div>

        <div className="principle-list">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
              <span className="principle-plus" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className="direction-note">
          <span className="note-icon">N.</span>
          <div>
            <strong>Our next chapter</strong>
            <p>
              Developing our capabilities in Denmark while assessing
              international partnerships and future market opportunities.
            </p>
          </div>
          <span className="direction-label">IN DEVELOPMENT</span>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <span className="eyebrow eyebrow-light">START A CONVERSATION</span>
          <h2>
            Have a digital idea
            <br />
            to explore?
          </h2>
          <p>
            Get in touch to discuss a website, an e-commerce project or a
            potential collaboration.
          </p>
          <a className="button button-gold" href="/contact">
            Contact Nordic Digital Commerce <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-footnote">
            Or email us directly: infonordicdigitalcommerce@gmail.com
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M8 35V13L24 29V13L40 29V13" />
                <path d="M8 35H40" />
              </svg>
            </span>
            <span className="brand-copy">
              <strong>NORDIC</strong>
              <span>DIGITAL COMMERCE</span>
            </span>
          </a>

          <p className="footer-tagline">
            Digital solutions, developed with purpose.
          </p>

          <div className="footer-business-details">
            <h3>Details</h3>

            <p>
              <span>Address</span>
              <strong>
                Værebrovej 96
                <br />
                2880 Bagsværd, Denmark
              </strong>
            </p>

            <p>
              <span>Email</span>
              <a href="mailto:infonordicdigitalcommerce@gmail.com">
                infonordicdigitalcommerce@gmail.com
              </a>
            </p>

            <a className="footer-contact-link" href="/contact">
              Contact us <span aria-hidden="true">↗</span>
            </a>
          </div>

          <span className="copyright">© 2026 Nordic Digital Commerce</span>
        </div>
      </footer>
    </main>
  );
}
