import React from "react";
import defaultMdxComponents from "fumadocs-ui/mdx";

interface ChangelogItem {
  date: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  title: string;
  description: string;
  image?: string;
  body: React.ComponentType<{ components: typeof defaultMdxComponents }>;
}

interface ChangelogProps {
  items?: ChangelogItem[];
}

const Tag = ({ name, color }: { name: string; color: string }) => (
  <span
    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mr-2 text-primary-foreground`}
    style={{ backgroundColor: color }}
  >
    {name}
  </span>
);

export default function Changelog({ items = [] }: ChangelogProps) {
  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-bold mb-4 text-foreground">What's new?</h1>
        <p className="text-xl text-muted-foreground">
          No updates available at the moment. Check back soon for the latest
          features and improvements!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-foreground">What's new?</h1>
        <p className="text-xl text-muted-foreground">
          A rundown of the latest DevRel Directory feature releases, product
          enhancements, design updates, and important bug fixes.
        </p>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="mb-12 pb-12 border-b border-border last:border-b-0"
        >
          <div className="mb-4">
            <span className="text-muted-foreground mr-4">{item.date}</span>
            {item.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex} name={tag.name} color={tag.color} />
            ))}
          </div>

          {/* FIXME: having this format for title and description would be nice */}
          {/* <h2 className="text-3xl font-bold mb-4 text-foreground">
            {item.title}
          </h2>
          <p className="text-muted-foreground mb-6">{item.description}</p>
          {item.image && (
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
              />
            </div>
          )} */}
          <div className="prose dark:prose-invert">
            <item.body components={defaultMdxComponents} />
          </div>
        </div>
      ))}
    </div>
  );
}
