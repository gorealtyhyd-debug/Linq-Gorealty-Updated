import { priceOverview } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { EnquireButton } from "@/components/EnquireButton";

export function PriceOverview() {
  return (
    <section id="pricing" className="section-pad light">
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{priceOverview.eyebrow}</Reveal>
          <Reveal as="h2">{priceOverview.heading}</Reveal>
        </div>
        <div className="price-grid">
          {priceOverview.cards.map((card) => (
            <Reveal key={card.label} className="price-card">
              <h3>{card.label}</h3>
              <div className="div" aria-hidden />
              <div className="amt">{card.price}</div>
              <div className="sz">{card.size}</div>
              <EnquireButton className="btn-primary">{card.cta}</EnquireButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
