import Image from "next/image";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flogo">
          <Image
            src="/images/linq-logo.png"
            alt="LINQ"
            width={120}
            height={38}
            className="logo-img"
            style={{ height: 38, width: "auto", margin: "0 auto 0.8rem" }}
          />
        </div>
        <p>{footer.rera}</p>
        <p>{footer.copyright}</p>
        <p>{footer.disclaimer1}</p>
        <p>{footer.disclaimer2}</p>
      </div>
    </footer>
  );
}
