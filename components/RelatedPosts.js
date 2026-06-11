import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";

export function RelatedPosts({ posts }) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="border-t border-line bg-white/72 py-14 sm:py-16">
      <Container>
        <div className="mb-7">
          <p className="mb-2 text-sm font-semibold text-clay">Related posts</p>
          <h2 className="text-3xl font-black text-ink">Keep reading</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
