import Link from "next/link";
import { ArrowRight, Cpu, Gauge, Layers3 } from "lucide-react";
import { BlogExplorer } from "@/components/BlogExplorer";
import { Container } from "@/components/Container";
import { FeaturedPost } from "@/components/FeaturedPost";
import { NewsletterBand } from "@/components/NewsletterBand";
import { PostCard } from "@/components/PostCard";
import { getAllPosts, getCategories, getFeaturedPost } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const recentPosts = posts.filter((post) => post.slug !== featuredPost.slug).slice(0, 3);
  const categories = getCategories();

  return (
    <>
      <FeaturedPost post={featuredPost} />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InsightCard
            icon={<Cpu size={22} aria-hidden="true" />}
            title="AI systems"
            copy="Patterns for pairing models with product guardrails, evals, and durable workflows."
          />
          <InsightCard
            icon={<Gauge size={22} aria-hidden="true" />}
            title="Fast interfaces"
            copy="Runtime, caching, and frontend notes for teams that care about response time."
          />
          <InsightCard
            icon={<Layers3 size={22} aria-hidden="true" />}
            title="Platform craft"
            copy="Observability, data, APIs, and design systems that keep shipping work calm."
          />
        </div>
      </Container>

      <Container className="pb-14 sm:pb-20">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-teal">Latest notes</p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight text-ink sm:text-4xl">
              Fresh field reports from product-minded engineers.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-bold text-white transition hover:bg-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Browse all
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>

      <section className="border-y border-line bg-white/72 py-14 sm:py-18">
        <Container>
          <div className="mb-7 max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-clay">Explore the archive</p>
            <h2 className="text-3xl font-black leading-tight text-ink sm:text-4xl">
              Searchable posts by category.
            </h2>
          </div>
          <BlogExplorer posts={posts} categories={categories} compact />
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <NewsletterBand />
      </Container>
    </>
  );
}

function InsightCard({ icon, title, copy }) {
  return (
    <div className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-paper text-teal">
        {icon}
      </div>
      <h3 className="text-lg font-extrabold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-700">{copy}</p>
    </div>
  );
}
