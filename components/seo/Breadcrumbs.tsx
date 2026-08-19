import Link from "next/link";

type Crumb = {
  name: string;
  href: string;
};

/**
 * Crawlable breadcrumb navigation with real links.
 * Hidden on the homepage visually when only one crumb; ready for inner pages.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href + item.name}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
              {!isLast ? (
                <span className="breadcrumbs-sep" aria-hidden>
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
