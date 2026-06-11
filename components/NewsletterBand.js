import { Rss } from "lucide-react";

export function NewsletterBand() {
  return (
    <section className="grid gap-6 rounded-lg border border-line bg-ink p-6 text-white shadow-soft md:grid-cols-[minmax(0,1fr)_360px] md:items-center md:p-8">
      <div>
        <p className="mb-2 text-sm font-semibold text-honey">Weekly dispatch</p>
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">
          One useful technical read every Friday.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
          Short essays on software decisions, tradeoffs, and practical systems
          thinking from the Signal Stack editors.
        </p>
      </div>
      <form className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          className="min-h-12 flex-1 rounded-md border border-white/18 bg-white px-4 text-sm font-semibold text-ink outline-none transition placeholder:text-zinc-500 focus:border-honey focus:ring-2 focus:ring-honey"
        />
        <button
          type="button"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-honey px-5 text-sm font-black text-ink transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <Rss size={17} aria-hidden="true" />
          Subscribe
        </button>
      </form>
    </section>
  );
}
