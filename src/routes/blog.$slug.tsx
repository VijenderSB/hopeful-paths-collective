import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero, FinalCTA } from "@/components/site/Bits";
import { LeadForm } from "@/components/site/LeadForm";
import { BLOG_POSTS } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = BLOG_POSTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { post: p };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: [
        { title: `${p?.title ?? "Article"} | DeAddictify Blog` },
        { name: "description", content: p?.excerpt ?? "" },
        { property: "og:title", content: p?.title ?? "" },
        { property: "og:description", content: p?.excerpt ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p?.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${p?.slug}` }],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">Article not found</h1>
      <Link to="/blog" className="text-secondary-foreground mt-4 inline-block">← All articles</Link>
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} subtitle={post.excerpt} />
      <section className="container-page py-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <article className="prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-4">
          <p>Addiction is a treatable medical condition. With the right structured care, sustained recovery is achievable for the patient and the family.</p>
          <p>This article provides practical, compassionate guidance based on our work with families across Delhi NCR. If you or someone you love is struggling, the most important step is the first conversation.</p>
          <h2 className="text-2xl font-bold text-primary !mt-8">Key takeaways</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Recognise the warning signs early.</li>
            <li>Approach with empathy, not confrontation.</li>
            <li>Seek a clinical assessment from a qualified professional.</li>
            <li>Engage in family counselling alongside the patient's treatment.</li>
            <li>Plan for long-term aftercare and relapse prevention.</li>
          </ul>
          <h2 className="text-2xl font-bold text-primary !mt-8">How DeAddictify can help</h2>
          <p>We provide free confidential counselling, psychiatrist-led treatment planning, admission assistance, family therapy and long-term recovery support — all at affordable, transparent pricing.</p>
        </article>
        <aside className="lg:sticky lg:top-24"><LeadForm title="Talk to a counsellor" /></aside>
      </section>
      <FinalCTA />
    </>
  );
}
