"use client";

import { ArrowRight, Calendar, User } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";

interface Post {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
}

interface PostCardProps {
  post: Post;
  index: number;
  mounted: boolean;
}

export function PostCard({ post, index, mounted }: PostCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug}`}>
        <div
          className="relative h-full overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/50"
          onMouseMove={onMouseMove}
        >
          {/* Gradient spotlight effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  350px circle at ${mouseX}px ${mouseY}px,
                  rgba(255,255,255,0.1),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Post content */}
          <div className="relative z-10 flex h-full flex-col gap-4">
            <div className="space-y-2">
              <motion.h3
                className="font-semibold leading-tight tracking-tight"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {post.title}
              </motion.h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.description}
              </p>
            </div>

            <div className="mt-auto flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
