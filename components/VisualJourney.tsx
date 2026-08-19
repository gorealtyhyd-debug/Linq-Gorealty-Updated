import { visualJourney } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Carousel } from "@/components/ui/Carousel";

export function VisualJourney() {
  return (
    <section id="journey" className="section-pad light">
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{visualJourney.eyebrow}</Reveal>
          <Reveal as="h2">{visualJourney.heading}</Reveal>
        </div>
        <Reveal>
          <Carousel
            id="journey-slides"
            slides={visualJourney.slides}
            captionMode="label"
          />
        </Reveal>
      </div>
    </section>
  );
}
