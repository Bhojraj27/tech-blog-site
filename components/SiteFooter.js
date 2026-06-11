import Link from "next/link";
import { Rss } from "lucide-react";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="text-lg font-black text-ink">
            Signal Stack
          </Link>
          <p className="mt-1 text-sm text-zinc-600">
            Practical tech notes for builders.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-zinc-700">
          <Link className="transition hover:text-teal" href="/blog">
            Blog
          </Link>
          <a className="transition hover:text-teal" href="mailto:editors@signalstack.example">
            Contact
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 transition hover:border-teal hover:text-teal"
            href="/blog"
          >
            <Rss size={16} aria-hidden="true" />
            RSS
          </a>
        </div>
      </Container>
    </footer>
  );
}
