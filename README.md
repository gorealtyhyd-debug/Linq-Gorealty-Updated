# LINQ by GoRealty — Next.js rebuild

Premium residential landing page rebuilt from https://linq.gorealtyprophub.com/ using Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Server Components by default

## Scripts

```bash
npm run dev
npm run build
npm start
```

## SEO (Phase 2)

- Metadata API (title, description, canonical, Open Graph, Twitter)
- `/robots.txt` and `/sitemap.xml`
- JSON-LD: Organization, WebSite, WebPage, ApartmentComplex, BreadcrumbList
- Crawlable internal section links in header/footer

Preview:

- Homepage: http://localhost:3000/
- Robots: http://localhost:3000/robots.txt
- Sitemap: http://localhost:3000/sitemap.xml

## Notes

- Content and visuals match the existing live site (Phase 1).
- Enquiry form UI is modular; Privyr lead integration is deferred.
- TODO: VERIFY RERA number and contact email against official records.
