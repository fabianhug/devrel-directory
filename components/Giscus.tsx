"use client";

import { useEffect, useRef } from "react";

export function Giscus() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "fabianhug/devrel-directory");
    script.setAttribute("data-repo-id", "R_kgDONC2NoA");
    script.setAttribute("data-category", "Blog Discussion");
    script.setAttribute("data-category-id", "DIC_kwDONC2NoM4CkD-S");
    script.setAttribute("data-mapping", "title");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    ref.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={ref} />;
}
