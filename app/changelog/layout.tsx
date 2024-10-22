import Changelog from "@/components/changelog";
import { changelog } from "@/app/source";

export default function ChangelogPage() {
  const changelogItems = changelog.getPages().map((page) => ({
    date: page.data.date,
    tags: page.data.tags,
    title: page.data.title,
    description: page.data.description,
    image: page.data.image,
    url: page.url,
  }));

  // Sort the items by date, most recent first
  changelogItems.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Changelog items={changelogItems} />
    </div>
  );
}
