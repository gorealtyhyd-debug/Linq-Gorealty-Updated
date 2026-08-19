"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3";
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety: if IntersectionObserver is unavailable, show immediately
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);

    // Fallback: never leave content permanently hidden
    const fallback = window.setTimeout(() => {
      if (!el.classList.contains("visible")) {
        el.classList.add("visible");
        observer.unobserve(el);
      }
    }, 2500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
