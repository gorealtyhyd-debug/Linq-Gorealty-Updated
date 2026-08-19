"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  title?: string;
  label?: string;
  desc?: string;
  img: string;
};

export function Carousel({
  slides,
  id,
  captionMode = "title-desc",
}: {
  slides: Slide[];
  id: string;
  captionMode?: "title-desc" | "label";
}) {
  const [index, setIndex] = useState(0);
  const len = slides.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + len) % len),
    [len],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % len), [len]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="carousel" id={id}>
      <div className="car-track">
        <div
          className="car-slides"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => {
            const caption =
              captionMode === "label"
                ? slide.label
                : `${slide.title}${slide.desc ? ` — ${slide.desc}` : ""}`;
            return (
              <div className="car-slide" key={slide.img + (slide.title || slide.label)}>
                <div className="art-img">
                  <Image
                    src={slide.img}
                    alt={slide.title || slide.label || "Gallery image"}
                    fill
                    className="real-img"
                    sizes="(max-width: 900px) 100vw, 1100px"
                  />
                  {captionMode === "label" ? (
                    <span className="art-label">{slide.label}</span>
                  ) : (
                    <div className="car-caption">
                      <h4>{slide.title}</h4>
                      {slide.desc ? <p>{slide.desc}</p> : null}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="car-arrow prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        type="button"
        className="car-arrow next"
        onClick={next}
        aria-label="Next slide"
      >
        →
      </button>
      <div className="car-dots" role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={slide.img + i}
            type="button"
            className={`dot${i === index ? " active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
