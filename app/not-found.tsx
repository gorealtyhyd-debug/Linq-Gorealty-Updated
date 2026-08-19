import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found on The Linq by GoRealty website.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: undefined,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
        background: "var(--off-white)",
        color: "var(--navy)",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--mono)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            fontSize: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            marginBottom: "1rem",
          }}
        >
          Page not found
        </h1>
        <p style={{ color: "var(--dark-gray)", marginBottom: "2rem" }}>
          This URL is not available. Return to the LINQ by Raghava Kokapet
          homepage.
        </p>
        <Link href="/" className="btn-primary">
          Back to LINQ homepage
        </Link>
      </div>
    </main>
  );
}
