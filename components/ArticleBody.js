export function ArticleBody({ post }) {
  return (
    <div className="article-content rounded-lg border border-line bg-white p-6 shadow-sm sm:p-9">
      {post.content.map((block, index) => {
        if (block.type === "heading") {
          return <h2 key={index}>{block.text}</h2>;
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="my-6">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="my-8 border-l-4 border-honey bg-paper px-5 py-4 text-lg font-bold leading-8 text-ink"
            >
              {block.text}
            </blockquote>
          );
        }

        return (
          <p key={index} className="mt-5 first:mt-0">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
