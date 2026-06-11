"use client";

import { useMemo, useState } from "react";
import { Layers3 } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { SearchInput } from "@/components/SearchInput";

export function BlogExplorer({ posts, categories, compact = false }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        post.author.name,
        ...post.tags
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, posts, query]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-zinc-700">
            <Layers3 size={16} aria-hidden="true" />
            Categories
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-md border px-3 py-2 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white text-zinc-700 hover:border-teal hover:text-teal"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <SearchInput value={query} onChange={setQuery} />
      </div>

      <div className="flex items-center justify-between border-b border-line pb-3 text-sm text-zinc-600">
        <span>
          {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
        </span>
        <span>{activeCategory}</span>
      </div>

      {filteredPosts.length > 0 ? (
        <div className={`grid gap-5 ${compact ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-line bg-white p-8 text-center">
          <h2 className="text-xl font-black text-ink">No matching articles</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Try another topic or clear the search field.
          </p>
        </div>
      )}
    </div>
  );
}
