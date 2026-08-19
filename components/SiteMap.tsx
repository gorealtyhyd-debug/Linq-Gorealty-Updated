import Image from "next/image";
import { siteMap } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { EnquireButton } from "@/components/EnquireButton";

export function SiteMap() {
  return (
    <section id="sitemap" className="section-pad light">
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{siteMap.eyebrow}</Reveal>
          <Reveal as="h2">{siteMap.heading}</Reveal>
        </div>
        <div className="sitemap-grid">
          <Reveal>
            <h3>{siteMap.layoutTitle}</h3>
            <p className="sz-line">{siteMap.sizes}</p>
            <EnquireButton className="btn-primary">{siteMap.cta}</EnquireButton>
          </Reveal>
          <Reveal
            className="art-img map-frame"
            style={{
              background: "linear-gradient(135deg,#eef1e8,#dfe6d6)",
            }}
          >
            <Image
              src={siteMap.image}
              alt={siteMap.imageAlt}
              fill
              className="real-img"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span
              className="art-label"
              style={{
                color: "var(--navy)",
                background: "rgba(255,255,255,.85)",
              }}
            >
              {siteMap.imageLabel}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
