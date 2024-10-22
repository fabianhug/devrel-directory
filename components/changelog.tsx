import React from "react";
import Image from "next/image";

interface ChangelogItem {
  date: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  title: string;
  description: string;
  image?: string;
}

interface ChangelogProps {
  items?: ChangelogItem[];
}

const Tag = ({ name, color }: { name: string; color: string }) => (
  <span
    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mr-2`}
    style={{ backgroundColor: color, color: "white" }}
  >
    {name}
  </span>
);

export default function Changelog({ items = [] }: ChangelogProps) {
  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-bold mb-4">What's new?</h1>
        <p className="text-xl text-gray-600">
          No updates available at the moment. Check back soon for the latest
          features and improvements!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">What's new?</h1>
        <p className="text-xl text-gray-600">
          A rundown of the latest DevRel Directory feature releases, product
          enhancements, design updates, and important bug fixes.
        </p>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="mb-12 pb-12 border-b border-gray-200 last:border-b-0"
        >
          <div className="mb-4">
            <span className="text-gray-500 mr-4">{item.date}</span>
            {item.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex} name={tag.name} color={tag.color} />
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-700 mb-6">{item.description}</p>
          {item.image && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                layout="responsive"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
