import { BlogExplorer } from "@/components/BlogExplorer";
import { Container } from "@/components/Container";
import { getAllPosts, getCategories } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Browse Signal Stack articles by category, topic, author, or keyword.",
  alternates: {
    canonical: "/blog"
  }
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <Container className="py-12 sm:py-16">
      <div className="mb-9 max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-teal">All articles</p>
        <h1 className="text-4xl font-black leading-tight text-ink sm:text-5xl">
          Practical notes for modern software teams.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700">
          Field-tested writing on AI product engineering, performant web apps,
          developer platforms, observability, API design, and the human side of
          shipping technical systems.
        </p>
      </div>

      <BlogExplorer posts={posts} categories={categories} />
    </Container>
  );
}
