import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { GLOBAL_FAQ } from "@/lib/site";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog";
import pageBanner from "@/assets/banner-blog.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "DeAddictify Blog — Addiction, Recovery & Family Support" },
      { name: "description", content: "Articles on alcohol & drug addiction, de-addiction treatment in Delhi NCR, recovery tips, family support, withdrawal and relapse prevention." },
      { property: "og:title", content: "DeAddictify Blog" },
      { property: "og:description", content: "Guidance for individuals and families navigating addiction and recovery in Delhi NCR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://hopeful-paths-collective.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://hopeful-paths-collective.lovable.app/blog" }],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId === "/blog/$slug")) return <Outlet />;
  return (
    <>
      <PageHero image={pageBanner} eyebrow="Blog" title="Addiction, Recovery & Family Support" subtitle="Practical, compassionate articles to help individuals and families across Delhi NCR navigate de-addiction treatment and recovery." />
      <section className="container-page py-14">
        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">{c}</span>
          ))}
        </div>
        <SectionHeading title="Latest Articles" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card overflow-hidden card-hover flex flex-col">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.image} alt={p.imageAlt} loading="lazy" width={1024} height={576} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">{p.category} · {p.readMins} min read</div>
                <h3 className="mt-1 text-lg font-bold text-primary leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-accent-foreground group-hover:underline">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Testimonials />
      <FAQ items={GLOBAL_FAQ.slice(0, 8)} />
      <FinalCTA />
    </>
  );
}
