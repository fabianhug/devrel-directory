"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";

interface Post {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
}

export default function PostCarousel({
  posts = defaultPosts,
}: {
  posts?: Post[];
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[300px] w-[600px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      {/* Section Header */}
      <div className="relative space-y-2 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:to-white/70"
        >
          Latest Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          Explore the latest trends and strategies in Developer Relations
        </motion.p>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard
            key={post.slug}
            post={post}
            index={index}
            mounted={mounted}
          />
        ))}
      </div>
    </section>
  );
}

const defaultPosts: Post[] = [
  {
    title: "DevRel Strategy - A Comprehensive Guide",
    description:
      "Creating and implementing effective Developer Relations strategies",
    author: "Fabian Hug",
    date: "Wed Nov 06 2024",
    slug: "devrel-strategy-guide",
  },
  {
    title: "Goals Planning for your DevRel Team using OKRs",
    description:
      "Learn how to set and track meaningful objectives for your Developer Relations team",
    author: "Brendan Graetz",
    date: "Tue Oct 29 2024",
    slug: "goals-planning-okrs",
  },
  {
    title: "Welcome to devrel.directory - Your Hub for Developer Relations",
    description:
      "An introduction to devrel.directory and a comprehensive guide on how to contribute",
    author: "Fabian Hug",
    date: "Fri Oct 25 2024",
    slug: "welcome-to-devrel-directory",
  },
];
