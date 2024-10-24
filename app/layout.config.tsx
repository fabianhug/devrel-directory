import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "devrel.directory",
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Blog",
      url: "/blog",
      active: "nested-url",
    },
    {
      text: "Changelog",
      url: "/changelog",
      active: "nested-url",
    },
    {
      text: "Contribute",
      url: "https://github.com/fabianhug/devrel-directory",
      active: "url",
    },
  ],
};
