"use client";

import Image from "next/image";
import { hero } from "@/content/site";
import { useEnquiry } from "@/components/EnquiryProvider";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="hero">
      <div className="hero-bg-img">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 25%" }}
        />
      </div>
      <div className="hero-grad" aria-hidden />
      <div className="container hero-inner">
        <Reveal className="hero-eyebrow">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <Image
              src="/images/linq-logo.png"
              alt="LINQ"
              width={90}
              height={32}
              style={{
                height: 32,
                width: "auto",
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
              }}
            />
            <span>{hero.presents}</span>
          </span>
        </Reveal>
        <Reveal className="hero-badge-tag">{hero.badge}</Reveal>
        <Reveal as="h1" className="hero-title">
          {hero.title}
        </Reveal>
        <Reveal className="hero-sub">
          <span className="hero-sub-tag">{hero.subtitle}</span>
        </Reveal>
        <Reveal className="hero-divider" aria-hidden>
          <span className="line" />
          <span className="diamond" />
          <span className="dot" />
          <span className="line" />
        </Reveal>
        <Reveal className="hero-price-banner">
          <div className="hero-price-col">
            <div className="hero-price-label">{hero.currentLabel}</div>
            <div className="hero-price-val">{hero.currentPrice}</div>
          </div>
          <div className="hero-price-divider" />
          <div className="hero-price-col">
            <div className="hero-price-label">{hero.launchLabel}</div>
            <div className="hero-price-val">{hero.launchPrice}</div>
            <div className="hero-price-sub">{hero.launchSub}</div>
          </div>
        </Reveal>
        <Reveal className="hero-btn-row">
          <button type="button" className="btn-primary" onClick={openEnquiry}>
            {hero.primaryCta}
          </button>
          <a href="#amenities" className="btn-secondary">
            {hero.secondaryCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
