import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero, FinalCTA } from "@/components/site/Bits";
import { LeadForm } from "@/components/site/LeadForm";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = BLOG_POSTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    const related = BLOG_POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);
    return { post: p, related };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: [
        { title: p?.metaTitle ?? "Article | DeAddictify Blog" },
        { name: "description", content: p?.metaDescription ?? "" },
        { property: "og:title", content: p?.metaTitle ?? "" },
        { property: "og:description", content: p?.metaDescription ?? "" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `${SITE_URL}/blog/${p?.slug}` },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${p?.slug}` }],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">Article not found</h1>
      <Link to="/blog" className="text-accent-foreground mt-4 inline-block">← All articles</Link>
    </div>
  ),
});

function PostPage() {
  const { post, related } = Route.useLoaderData();
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <PageHero eyebrow={`${post.category} · ${post.readMins} min read`} title={post.title} subtitle={post.excerpt} />
      <section className="container-page py-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <article className="max-w-none">
          <img src={post.image} alt={post.imageAlt} width={1280} height={720} className="w-full rounded-2xl border border-border object-cover aspect-[16/9]" />
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            {post.body.map((b, i) => (
              <div key={i} className="space-y-3">
                {b.h && <h2 className="text-2xl font-bold text-primary">{b.h}</h2>}
                {b.p?.map((t, j) => <p key={j}>{t}</p>)}
                {b.ul && (
                  <ul className="list-disc pl-5 space-y-1.5">
                    {b.ul.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                )}
              </div>
            ))}

            <h2 className="text-2xl font-bold text-primary pt-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {post.faqs.map(([q, a]) => (
                <div key={q} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-primary">{q}</h3>
                  <p className="mt-1.5 text-sm">{a}</p>
                </div>
              ))}
            </div>

            <p className="rounded-2xl bg-secondary p-5 text-sm">
              <strong className="text-primary">Note:</strong> This article is for general information and awareness only and is not medical advice, diagnosis or treatment. Alcohol and drug dependence should be assessed and treated by qualified healthcare professionals. In an emergency, seek immediate medical attention.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-primary">Continue reading</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group rounded-2xl border border-border bg-card overflow-hidden card-hover">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={r.image} alt={r.imageAlt} loading="lazy" width={640} height={360} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-primary leading-snug">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        </article>
        <aside className="lg:sticky lg:top-24"><LeadForm title="Talk to a counsellor" /></aside>
      </section>
      <FinalCTA />
    </>
  );
}
