import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { ArticleBody } from "@/components/ArticleBody";
import { AuthorCard } from "@/components/AuthorCard";
import { Container } from "@/components/Container";
import { RelatedPosts } from "@/components/RelatedPosts";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts
} from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found"
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 675,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage]
    }
  };
}

export default function BlogDetailPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <>
      <Container className="py-8 sm:py-12">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-teal transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Blog
        </Link>

        <article>
          <div className="mx-auto max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-zinc-700">
              <span className="rounded-md bg-white px-3 py-1 text-teal shadow-sm">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={16} aria-hidden="true" />
                {formatPostDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={16} aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-balance text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
              {post.excerpt}
            </p>
          </div>

          <div className="my-9 overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={post.coverImage}
              alt=""
              width={1600}
              height={900}
              priority
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <ArticleBody post={post} />
            <aside className="space-y-6 lg:sticky lg:top-24">
              <AuthorCard author={post.author} />
              <div className="rounded-lg border border-line bg-white p-5">
                <h2 className="text-sm font-extrabold text-ink">Topics</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-paper px-3 py-1 text-sm font-semibold text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </Container>

      <RelatedPosts posts={relatedPosts} />
    </>
  );
}
