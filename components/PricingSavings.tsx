import Image from "next/image";
import { pricingSavings } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { EnquireButton } from "@/components/EnquireButton";

export function PricingSavings() {
  return (
    <section className="light section-pad" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{pricingSavings.eyebrow}</Reveal>
          <Reveal as="h2">{pricingSavings.heading}</Reveal>
        </div>
        <div className="savings-grid">
          <Reveal>
            <div className="savings-table">
              <div className="th">
                <span>BASE PRICE</span>
                <span className="text-right">SAVINGS</span>
              </div>
              {pricingSavings.rows.map((row) => (
                <div className="tr" key={row.base}>
                  <span>{row.base}</span>
                  <span className="text-right">{row.savings}</span>
                </div>
              ))}
            </div>
            <EnquireButton
              className="btn-primary"
              style={{
                marginTop: "1.6rem",
                display: "inline-block",
                background: "var(--navy)",
                color: "var(--gold)",
              }}
            >
              {pricingSavings.cta}
            </EnquireButton>
          </Reveal>
          <Reveal className="art-img tall">
            <Image
              src={pricingSavings.image}
              alt={pricingSavings.imageAlt}
              fill
              className="real-img"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="art-label">{pricingSavings.imageLabel}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
