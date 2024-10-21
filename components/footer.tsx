import Link from "next/link";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-background text-foreground py-8 px-4 mt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">DevRel Directory</h3>
          <p className="text-sm">
            Your comprehensive resource for Developer Relations.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">Contribute</h3>
          <Link
            href="/docs/additional-resources/contributing"
            className="text-primary hover:text-primary/80"
          >
            How to Contribute
          </Link>
          <a
            href="https://github.com/fabianhug/devrel-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            GitHub
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">Learn</h3>
          <Link href="/docs" className="text-primary hover:text-primary/80">
            Explore Docs
          </Link>
          <Link href="/blog" className="text-primary hover:text-primary/80">
            Read Blog
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>
          Built by{" "}
          <a
            href="https://x.com/0xfabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            @0xfabs
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
