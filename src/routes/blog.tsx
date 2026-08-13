import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "DeAddictify Blog — Addiction, Recovery & Family Support" },
      { name: "description", content: "Articles on alcohol & drug addiction, recovery tips, family support, relapse prevention and mental health from DeAddictify." },
      { property: "og:title", content: "DeAddictify Blog" },
      { property: "og:description", content: "Guidance for individuals and families navigating addiction and recovery." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId === "/blog/$slug")) return <Outlet />;
  return (
    <>
      <PageHero eyebrow="Blog" title="Addiction, Recovery & Family Support" subtitle="Practical, compassionate articles to help individuals and families navigate recovery." />
      <section className="container-page py-14">
        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">{c}</span>
          ))}
        </div>
        <SectionHeading title="Latest Articles" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="rounded-2xl border border-border bg-card overflow-hidden card-hover">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/15 via-teal/15 to-success/15" />
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground">{p.category}</div>
                <h3 className="mt-1 text-lg font-bold text-primary leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-secondary-foreground">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
