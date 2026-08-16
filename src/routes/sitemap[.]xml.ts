import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CITIES, CONDITIONS, SERVICES, FAMILY_PAGES, BLOG_POSTS } from "@/lib/site";
import { UP_CITIES } from "@/lib/up-cities";

const BASE_URL = "https://hopeful-paths-collective.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: string[] = [
          "/", "/about", "/reclaim-360", "/conditions", "/programs", "/rehabilitation-services",
          "/family-support", "/locations", "/cities", "/success-stories", "/blog", "/contact",
          "/privacy", "/terms", "/disclaimer",
        ];


        CONDITIONS.forEach(c => paths.push(`/conditions/${c.slug}`));
        SERVICES.forEach(s => paths.push(`/rehabilitation-services/${s.slug}`));
        FAMILY_PAGES.forEach(f => paths.push(`/family-support/${f.slug}`));
        CITIES.forEach(c => paths.push(`/locations/${c.slug}`));
        paths.push("/locations/uttar-pradesh");
        UP_CITIES.forEach(c => paths.push(`/locations/uttar-pradesh/${c.slug}`));
        BLOG_POSTS.forEach(b => paths.push(`/blog/${b.slug}`));

        const urls = paths.map(p => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
