import { amenities } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Carousel } from "@/components/ui/Carousel";

export function Amenities() {
  return (
    <section id="amenities" className="dark section-pad">
      <div className="container">
        <div className="center-head">
          <Reveal className="eyebrow">{amenities.eyebrow}</Reveal>
          <Reveal as="h2">{amenities.heading}</Reveal>
          <Reveal as="p">{amenities.body}</Reveal>
        </div>
        <Reveal>
          <Carousel
            id="amenity-slides"
            slides={amenities.slides}
            captionMode="title-desc"
          />
        </Reveal>
      </div>
    </section>
  );
}
