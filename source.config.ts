import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from "fumadocs-mdx/config";

import { z } from "zod";
export const { docs, meta } = defineDocs();

export const blog = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    authorImage: z.string().optional(),
    date: z.string().date().or(z.date()).optional(),
  }),
  type: "doc",
});

export const changelog = defineCollections({
  dir: "content/changelog",
  type: "doc",
});

export default defineConfig();
