import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-ink text-sm font-black text-white">
            SS
          </span>
          <span>
            <span className="block text-lg font-black leading-none text-ink">
              Signal Stack
            </span>
            <span className="hidden text-xs font-semibold text-zinc-600 sm:block">
              Practical tech notes
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4" aria-label="Main navigation">
          <Link
            href="/blog"
            className="rounded-md px-3 py-2 text-sm font-bold text-zinc-700 transition hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Blog
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-3 py-2 text-sm font-bold text-white transition hover:bg-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Explore
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </Container>
    </header>
  );
}
