import { Github, Linkedin, Mail } from "lucide-react";

export function AuthorCard({ author }) {
  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md text-lg font-black text-white"
          style={{ backgroundColor: author.color }}
          aria-hidden="true"
        >
          {author.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-teal">Author</p>
          <h2 className="text-xl font-black text-ink">{author.name}</h2>
          <p className="mt-1 text-sm font-semibold text-zinc-600">{author.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-700">{author.bio}</p>
      <div className="mt-5 flex gap-2">
        <AuthorLink href={author.links.mail} label="Email">
          <Mail size={17} aria-hidden="true" />
        </AuthorLink>
        <AuthorLink href={author.links.github} label="GitHub">
          <Github size={17} aria-hidden="true" />
        </AuthorLink>
        <AuthorLink href={author.links.linkedin} label="LinkedIn">
          <Linkedin size={17} aria-hidden="true" />
        </AuthorLink>
      </div>
    </section>
  );
}

function AuthorLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-paper text-ink transition hover:border-teal hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
}
