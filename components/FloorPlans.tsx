import Image from "next/image";
import { floorPlans } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { EnquireButton } from "@/components/EnquireButton";

export function FloorPlans() {
  return (
    <section id="floorplans" className="section-pad white-bg">
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{floorPlans.eyebrow}</Reveal>
          <Reveal as="h2">{floorPlans.heading}</Reveal>
          <Reveal as="p">{floorPlans.body}</Reveal>
        </div>
        <div className="sitemap-grid">
          <Reveal
            className="art-img tall"
            style={{
              background: "linear-gradient(135deg,#eef1e8,#dfe6d6)",
            }}
          >
            <Image
              src={floorPlans.image}
              alt={floorPlans.imageAlt}
              fill
              className="real-img"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="art-label">{floorPlans.imageLabel}</span>
          </Reveal>
          <Reveal>
            <h3>{floorPlans.sideTitle}</h3>
            <p>{floorPlans.sideBody}</p>
            <EnquireButton
              className="btn-primary"
              style={{
                marginTop: "1.6rem",
                background: "var(--navy)",
                color: "var(--gold)",
              }}
            >
              {floorPlans.cta}
            </EnquireButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
