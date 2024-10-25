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
            We're thrilled to launch devrel.directory - read more about it{" "}
            <Link href="/blog/2024-10-25-what-is-the-devrel-directory-and-how-to-contribute">
              here
            </Link>
          </p>
        </Banner>
        <RootProvider>{children}</RootProvider>
        <Footer />
      </body>
    </html>
  );
}
