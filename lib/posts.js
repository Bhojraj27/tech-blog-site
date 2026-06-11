const authors = {
  mira: {
    name: "Mira Kapoor",
    initials: "MK",
    role: "AI product engineer",
    bio: "Mira writes about model-backed product systems, practical evals, and the habits that keep AI features useful after launch.",
    color: "#087f8c",
    links: {
      mail: "mailto:mira@signalstack.example",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/"
    }
  },
  leo: {
    name: "Leo Martin",
    initials: "LM",
    role: "Frontend platform lead",
    bio: "Leo focuses on runtime performance, design systems, and the small interface decisions that make software feel faster.",
    color: "#d85f3f",
    links: {
      mail: "mailto:leo@signalstack.example",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/"
    }
  },
  ana: {
    name: "Ana Wu",
    initials: "AW",
    role: "Developer experience architect",
    bio: "Ana covers observability, API design, and developer workflows for teams that need reliability without ceremony.",
    color: "#59715a",
    links: {
      mail: "mailto:ana@signalstack.example",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/"
    }
  }
};

const posts = [
  {
    slug: "ai-product-workflows",
    title: "Designing resilient AI product workflows",
    excerpt:
      "A practical framework for pairing model output with evals, product states, and human review loops that age well.",
    category: "AI Engineering",
    date: "2026-05-28",
    readingTime: "8 min read",
    author: authors.mira,
    coverImage: "/images/covers/ai-product-workflows.png",
    featured: true,
    tags: ["AI", "Evals", "Product systems", "Workflow design"],
    content: [
      {
        type: "paragraph",
        text:
          "The strongest AI features do not begin with a prompt. They begin with a product state that knows what should happen before, during, and after model involvement. That state gives the model a job, gives the user a recovery path, and gives the team a surface to measure."
      },
      {
        type: "paragraph",
        text:
          "A resilient workflow treats the model as a collaborator inside a system, not as the whole system. Inputs are normalized, context is selected deliberately, risky outputs are held for review, and every handoff is visible enough to debug."
      },
      {
        type: "heading",
        text: "Start with the decision boundary"
      },
      {
        type: "paragraph",
        text:
          "Before choosing a model, define the exact decisions the product will let automation make. Drafting, ranking, summarizing, classifying, and taking action each carry different risk. The boundary should be visible in code and in the interface."
      },
      {
        type: "list",
        items: [
          "Use deterministic checks before calling the model.",
          "Store model inputs, selected context, and output decisions together.",
          "Separate user-facing confidence from internal model scores.",
          "Make fallbacks boring, obvious, and fast."
        ]
      },
      {
        type: "quote",
        text:
          "The point of an eval is not to crown a model. It is to notice when product behavior drifts away from user trust."
      },
      {
        type: "heading",
        text: "Ship with a review loop"
      },
      {
        type: "paragraph",
        text:
          "Human review is most effective when it is framed as product feedback, not as an apology for automation. Capture the reviewer action, the reason, and the surrounding context. That data becomes a living map of where prompts, retrieval, or workflow states need attention."
      },
      {
        type: "paragraph",
        text:
          "The healthiest AI systems make uncertainty legible. They slow down when the cost of being wrong is high and move quickly when the user can easily steer the result."
      }
    ]
  },
  {
    slug: "edge-runtime-patterns",
    title: "Edge runtime patterns for fast teams",
    excerpt:
      "How to decide what belongs at the edge, what should stay server-side, and where caching actually pays rent.",
    category: "Web Performance",
    date: "2026-05-16",
    readingTime: "6 min read",
    author: authors.leo,
    coverImage: "/images/covers/edge-runtime-patterns.png",
    tags: ["Edge", "Caching", "Next.js", "Performance"],
    content: [
      {
        type: "paragraph",
        text:
          "Edge code is useful when it removes distance from a frequently repeated decision. It is less useful when it hides complexity in a place with tighter runtime constraints and thinner observability."
      },
      {
        type: "paragraph",
        text:
          "The best candidates are request shaping, lightweight personalization, redirects, AB assignment, and cache key decisions. Heavy data joins, slow third-party calls, and complex mutations usually belong elsewhere."
      },
      {
        type: "heading",
        text: "Treat cache keys as product logic"
      },
      {
        type: "paragraph",
        text:
          "A cache key is a promise about what differences matter. If that promise is vague, users see stale states and engineers add bypasses. Keep the key explicit and write tests around the variables that split the experience."
      },
      {
        type: "list",
        items: [
          "Prefer short-lived, composable cache rules over one global policy.",
          "Log cache intent beside cache outcome.",
          "Keep personalization at the smallest scope that creates value."
        ]
      },
      {
        type: "heading",
        text: "Design for local failure"
      },
      {
        type: "paragraph",
        text:
          "Edge functions should degrade with a known response, not a mystery timeout. When a dependency is slow, the fallback path needs to preserve navigation, account access, and the user's sense of where they are."
      }
    ]
  },
  {
    slug: "design-systems-for-dev-teams",
    title: "A practical guide to design systems for dev teams",
    excerpt:
      "A component strategy that keeps product teams moving without turning the system into a museum.",
    category: "Design Systems",
    date: "2026-04-30",
    readingTime: "7 min read",
    author: authors.leo,
    coverImage: "/images/covers/design-systems-for-dev-teams.png",
    tags: ["Components", "Accessibility", "UI architecture", "Design systems"],
    content: [
      {
        type: "paragraph",
        text:
          "A design system earns trust when it makes the common path faster and the uncommon path understandable. It should not ask every product team to become a system team before they can ship a screen."
      },
      {
        type: "heading",
        text: "Separate primitives from policy"
      },
      {
        type: "paragraph",
        text:
          "Primitives define behavior, accessibility, and layout constraints. Product components encode a specific workflow. Mixing those layers makes small changes feel political because every prop starts carrying more meaning than it should."
      },
      {
        type: "list",
        items: [
          "Keep primitive APIs small and composable.",
          "Document product components through real usage, not idealized examples.",
          "Audit empty, loading, error, and permission states before adding variants."
        ]
      },
      {
        type: "quote",
        text:
          "The system is healthy when teams delete custom code because the shared path is easier."
      },
      {
        type: "paragraph",
        text:
          "The craft is not in having more components. It is in naming the right responsibilities and making constraints feel like support."
      }
    ]
  },
  {
    slug: "observability-habits-silent-failures",
    title: "Observability habits that catch silent failures",
    excerpt:
      "The logs, metrics, and review rituals that reveal broken behavior before users have to explain it.",
    category: "DevOps",
    date: "2026-04-12",
    readingTime: "5 min read",
    author: authors.ana,
    coverImage: "/images/covers/observability-habits-silent-failures.png",
    tags: ["Observability", "Reliability", "Incidents", "Metrics"],
    content: [
      {
        type: "paragraph",
        text:
          "Silent failures are not quiet because nothing happened. They are quiet because the system failed in a place nobody was watching. The fix is rarely one dashboard. It is a habit of deciding what each workflow must prove."
      },
      {
        type: "heading",
        text: "Log transitions, not just exceptions"
      },
      {
        type: "paragraph",
        text:
          "A workflow can be broken even when every request returns 200. Capture the state transitions that matter: submitted, queued, enriched, sent, acknowledged, reconciled. Exceptions tell you when code crashed. Transitions tell you when the business promise stalled."
      },
      {
        type: "list",
        items: [
          "Add correlation IDs before the incident teaches you why they matter.",
          "Alert on missing expected events, not only high error rates.",
          "Review low-volume workflows because percentages hide small queues."
        ]
      },
      {
        type: "paragraph",
        text:
          "Good observability gives a team a shared memory. It turns vague unease into a concrete path through the system."
      }
    ]
  },
  {
    slug: "type-safe-apis-feature-work",
    title: "Type-safe APIs without slowing feature work",
    excerpt:
      "A lightweight contract approach that helps frontend and backend teams move in parallel with fewer surprises.",
    category: "API Design",
    date: "2026-03-27",
    readingTime: "6 min read",
    author: authors.ana,
    coverImage: "/images/covers/type-safe-apis-feature-work.png",
    tags: ["APIs", "Contracts", "Type safety", "Developer experience"],
    content: [
      {
        type: "paragraph",
        text:
          "Type safety is most useful when it shortens feedback loops. If a contract requires a meeting before every change, teams will route around it. If it shows drift at the pull request boundary, it becomes part of everyday flow."
      },
      {
        type: "heading",
        text: "Make contracts executable"
      },
      {
        type: "paragraph",
        text:
          "OpenAPI, GraphQL schemas, tRPC routers, and generated clients can all work. The important move is to run contract checks where engineers already look. A stale schema in a wiki is documentation theater."
      },
      {
        type: "list",
        items: [
          "Generate clients from the same source used for validation.",
          "Version response shape changes by user-visible behavior, not by team boundary.",
          "Add examples for empty and partial states, not only happy paths."
        ]
      },
      {
        type: "paragraph",
        text:
          "The goal is not perfect types. The goal is fewer ambiguous handoffs and faster confidence when a feature crosses service boundaries."
      }
    ]
  },
  {
    slug: "dashboards-people-trust",
    title: "Shipping dashboards people actually trust",
    excerpt:
      "Design and data choices that help operational dashboards become decision surfaces instead of wallpaper.",
    category: "Data Platforms",
    date: "2026-03-08",
    readingTime: "7 min read",
    author: authors.mira,
    coverImage: "/images/covers/dashboards-people-trust.png",
    tags: ["Dashboards", "Data quality", "Analytics", "Product design"],
    content: [
      {
        type: "paragraph",
        text:
          "People trust dashboards when they can see where a number came from, when it changed, and what action it supports. Without that context, the most polished chart becomes a decorative delay before someone opens a spreadsheet."
      },
      {
        type: "heading",
        text: "Show freshness and ownership"
      },
      {
        type: "paragraph",
        text:
          "Every critical metric needs a timestamp, a definition, and a clear owner. These details may look small, but they answer the questions that decide whether a team will use the dashboard during real work."
      },
      {
        type: "list",
        items: [
          "Group metrics by decision, not by database table.",
          "Expose data quality warnings near the affected value.",
          "Design empty states for delayed pipelines and missing permissions."
        ]
      },
      {
        type: "quote",
        text:
          "A dashboard is trustworthy when it can explain its own uncertainty."
      },
      {
        type: "paragraph",
        text:
          "Great dashboards are calmer than they are impressive. They make the next move visible and make doubt specific."
      }
    ]
  }
];

export function getAllPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getFeaturedPost() {
  return getAllPosts().find((post) => post.featured) ?? getAllPosts()[0];
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getCategories() {
  return Array.from(new Set(posts.map((post) => post.category))).sort();
}

export function getRelatedPosts(post, limit = 3) {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const categoryScore = candidate.category === post.category ? 3 : 0;
      const tagScore = candidate.tags.filter((tag) => post.tags.includes(tag)).length;

      return {
        post: candidate,
        score: categoryScore + tagScore
      };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.date) - new Date(a.post.date))
    .slice(0, limit)
    .map(({ post: relatedPost }) => relatedPost);
}

export function formatPostDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}
