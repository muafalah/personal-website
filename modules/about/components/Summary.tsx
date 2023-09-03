import React from "react";
import MDXComponent from "@/common/components/elements/MDXComponent";
import loadMdxFiles from "@/common/libs/mdx";

export default function Summary() {
  const content =
    loadMdxFiles("about", "/").find((item) => item.slug === "about") || null;
  return (
    <div className="flex flex-col space-y-6 font-sans text-neutral-800 dark:text-neutral-300">
      {content && <MDXComponent>{content?.content}</MDXComponent>}
    </div>
  );
}
