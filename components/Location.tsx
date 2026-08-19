import Image from "next/image";
import { location } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Location() {
  return (
    <section id="location" className="section-pad white-bg">
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{location.eyebrow}</Reveal>
          <Reveal as="h2">{location.heading}</Reveal>
          <Reveal as="p">{location.subheading}</Reveal>
        </div>
        <div className="loc-grid">
          <Reveal className="loc-list">
            {location.points.map((point) => (
              <div key={point.place}>
                <span>{point.place}</span>
                <span>{point.time}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="art-img tall" style={{ background: "#f5f7f2" }}>
            <Image
              src={location.mapSrc}
              alt={location.mapAlt}
              fill
              className="real-img"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="art-label">{location.mapLabel}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
