import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-gray-200/50 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative z-10 w-full max-w-2xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          devrel.directory
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your comprehensive resource for Developer Relations. Find resources,
          tools, and guides for your DevRel journey. Read the latest articles
          and stay updated with the DevRel community.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/docs">
              Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">
              Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href="https://github.com/0xfabs/devrel.directory"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
