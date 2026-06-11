import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Container } from "@/components/Container";
import { formatPostDate } from "@/lib/posts";

export function FeaturedPost({ post }) {
  return (
    <section className="border-b border-line bg-ink text-white">
      <Container className="py-6 sm:py-8">
        <div className="relative min-h-[540px] overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/10" />
          <div className="relative flex min-h-[540px] max-w-3xl flex-col justify-end px-5 py-8 sm:px-8 lg:px-12">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/86">
              <span className="rounded-md bg-white px-3 py-1 text-ink">
                Featured
              </span>
              <span>{post.category}</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={16} aria-hidden="true" />
                {formatPostDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={16} aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/84 sm:text-lg">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-honey px-4 py-3 text-sm font-black text-ink transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Read feature
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
