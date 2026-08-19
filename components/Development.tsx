import Image from "next/image";
import { development } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Development() {
  return (
    <section id="offerings" className="section-pad light">
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{development.eyebrow}</Reveal>
          <Reveal as="h2">{development.heading}</Reveal>
        </div>
        <div className="offerings-showcase">
          <Reveal className="offerings-gallery">
            {development.cards.map((card) => (
              <div key={card.label} className="art-img offering-card-img">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="real-img"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <span className="art-label">{card.label}</span>
              </div>
            ))}
          </Reveal>
          <div className="spec-list">
            {development.specs.map((spec) => (
              <Reveal key={spec.num} className="spec-item">
                <span className="spec-num">{spec.num}</span>
                <div className="spec-body">
                  <h3>{spec.title}</h3>
                  <p>{spec.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
