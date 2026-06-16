import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { formatPostDate } from "@/lib/posts";

export function PostCard({ post }) {
  return (
    <article className="group h-full overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-soft">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2">
        <div className="relative aspect-[16/9] overflow-hidden bg-ink">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold text-zinc-600">
            <span className="rounded-md bg-paper px-2.5 py-1 text-teal">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays size={14} aria-hidden="true" />
              {formatPostDate(post.date)}
            </span>
          </div>
          <h2 className="line-clamp-2 text-xl font-black leading-snug text-ink">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-700">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-5 text-sm font-bold text-teal">
            <span className="inline-flex items-center gap-1.5 text-zinc-600">
              <Clock3 size={15} aria-hidden="true" />
              {post.readingTime}
            </span>
            <span className="inline-flex items-center gap-1 transition group-hover:text-clay">
              Read
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
