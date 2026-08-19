import { contact, siteMeta } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad light">
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{contact.eyebrow}</Reveal>
          <Reveal as="h2">{contact.heading}</Reveal>
          <Reveal as="p">{contact.body}</Reveal>
        </div>
        <Reveal className="hero-btn-row" style={{ marginTop: 0 }}>
          <a
            href={`tel:${siteMeta.phone}`}
            className="btn-primary"
            style={{ background: "var(--navy)", color: "var(--gold)" }}
          >
            {contact.callCta}
          </a>
          <a
            href={`mailto:${siteMeta.email}`}
            className="btn-secondary"
            style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
          >
            {contact.emailCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
