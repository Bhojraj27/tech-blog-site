import { Search } from "lucide-react";

export function SearchInput({ value, onChange }) {
  return (
    <div>
      <label className="mb-3 block text-sm font-bold text-zinc-700" htmlFor="post-search">
        Search
      </label>
      <div className="relative">
        <Search
          size={18}
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />
        <input
          id="post-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search posts, tags, authors"
          className="min-h-12 w-full rounded-md border border-line bg-white pl-10 pr-4 text-sm font-semibold text-ink shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-teal focus:ring-2 focus:ring-teal/20"
        />
      </div>
    </div>
  );
}
