import Image from "next/image";
import Link from "next/link";
import { footer } from "@/content/site";
import { sectionAnchors } from "@/lib/seo";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flogo">
          <Image
            src="/images/linq-logo.png"
            alt="LINQ by Raghava"
            width={120}
            height={38}
            className="logo-img"
            style={{ height: 38, width: "auto", margin: "0 auto 0.8rem" }}
          />
        </div>

        {/* Crawlable internal links — discreet footer discovery, UI otherwise unchanged */}
        <nav className="footer-seo-nav" aria-label="LINQ site sections">
          <ul>
            {sectionAnchors.map((link) => (
              <li key={link.href}>
                <Link href={link.href} title={link.label}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p>{footer.rera}</p>
        <p>{footer.copyright}</p>
        <p>{footer.disclaimer1}</p>
        <p>{footer.disclaimer2}</p>
      </div>
    </footer>
  );
}
