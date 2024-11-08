import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Banner } from "fumadocs-ui/components/banner";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Banner variant="rainbow">
          <p>
            Read our latest article:{" "}
            <Link href="/blog/2024-11-06-devrel-strategy">
              "DevRel Strategy - A Comprehensive Guide"
            </Link>
          </p>
        </Banner>
        <RootProvider>{children}</RootProvider>
        <Footer />
      </body>
    </html>
  );
}
