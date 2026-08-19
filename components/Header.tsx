"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mobileNavLinks, navLinks } from "@/content/site";
import { useEnquiry } from "@/components/EnquiryProvider";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("offerings");
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "offerings",
      "pricing",
      "amenities",
      "sitemap",
      "location",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        id="site-header"
        className={scrolled ? "scrolled" : undefined}
      >
        <div className="container nav-wrap">
          <Link href="/" className="logo" title="LINQ by Raghava homepage">
            <Image
              src="/images/linq-logo.png"
              alt="LINQ Real Estate"
              width={120}
              height={40}
              className="logo-img"
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.title}
                    className={active === link.section ? "active" : undefined}
                    data-section={link.section}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link
              href="/#contact"
              title="Contact LINQ by GoRealty sales team"
              onClick={(e) => {
                e.preventDefault();
                openEnquiry();
              }}
            >
              <Image
                src="/images/raghava-logo.svg"
                alt="RAGHAVA"
                width={72}
                height={54}
                className="raghava-header-logo"
              />
            </Link>
            <button
              type="button"
              className="menu-toggle"
              id="menu-toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-backdrop${menuOpen ? " open" : ""}`}
        id="mobile-menu-backdrop"
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />
      <aside
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-head">
          <Link
            href="/"
            className="mobile-menu-logo"
            title="LINQ by Raghava homepage"
            onClick={closeMenu}
          >
            <Image
              src="/images/linq-logo.png"
              alt="LINQ"
              width={100}
              height={32}
              className="logo-img"
              style={{ height: 32, width: "auto" }}
            />
          </Link>
          <button
            type="button"
            className="mobile-menu-close"
            id="menu-close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4L20 20M20 4L4 20"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <ul className="mobile-menu-list">
          {mobileNavLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} title={link.title} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
