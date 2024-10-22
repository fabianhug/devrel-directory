import { changelog } from "@/app/source";
import Changelog from "@/components/changelog";
import { Metadata } from "next";

export default async function ChangelogPage() {
  const changelogItems = changelog.getPages().map((page) => ({
    date: new Date(page.data.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    tags: page.data.tags.map((tag: string) => ({
      name: tag,
      color: getTagColor(tag),
    })),
    title: page.data.title,
    description: page.data.description,
    image: page.data.image,
    body: page.data.body,
  }));

  // Sort the items by date, most recent first
  changelogItems.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background text-foreground ">
      <Changelog items={changelogItems} />
    </div>
  );
}

function getTagColor(tag: string): string {
  const colors: { [key: string]: string } = {
    Feature: "#3b82f6",
    Enhancement: "#8b5cf6",
    Design: "#f59e0b",
    Test: "#10b981",
  };
  return colors[tag] || "#6b7280"; // Default color if tag is not found
}

export function generateMetadata(): Metadata {
  return {
    title: "Changelog | DevRel Directory",
    description: "Latest updates and improvements to the DevRel Directory",
  };
}
