import Image from "next/image";
import Link from "next/link";
import { welcomeHome } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function WelcomeHome() {
  return (
    <section id="highlights" className="section-pad white-bg">
      <div className="container">
        <div className="intro-block">
          <Reveal className="eyebrow">{welcomeHome.eyebrow}</Reveal>
          <Reveal as="p">{welcomeHome.body}</Reveal>
          <Reveal>
            <Link
              href="/#amenities"
              className="btn-primary"
              title="Explore LINQ Kokapet amenities and lifestyle"
              style={{
                marginTop: "1.5rem",
                display: "inline-block",
                background: "var(--navy)",
                color: "var(--gold)",
              }}
            >
              {welcomeHome.cta}
            </Link>
          </Reveal>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <Reveal className="art-img tall">
            <Image
              src={welcomeHome.image}
              alt={welcomeHome.imageAlt}
              fill
              className="real-img"
              sizes="(max-width: 900px) 100vw, 1240px"
            />
            <span className="art-label">{welcomeHome.imageLabel}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
