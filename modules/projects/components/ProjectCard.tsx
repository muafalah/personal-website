import Card from "@/common/components/elements/Card";
import Image from "@/common/components/elements/Image";
import Tooltip from "@/common/components/elements/Tooltip";
import { TAG } from "@/common/constant/projects";
import { STACKS } from "@/common/constant/stacks";
import { IProjectItem } from "@/common/types/projects";
import Link from "next/link";
import React from "react";

export default function ProjectCard({
  title,
  slug,
  tag,
  description,
  image,
  stacks,
}: IProjectItem) {
  const trimmedContent =
    description.slice(0, 70) + (description.length > 70 ? "..." : "");
  const trimmedTitle = title.slice(0, 32) + (title.length > 32 ? "..." : "");

  return (
    <Link href={`/projects/${slug}`}>
      <Card className="relative border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] cursor-pointer">
        <div
          className={`absolute top-0 right-0 ${TAG[tag]} text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]`}
        >
          {tag}
        </div>
        <Image
          src={image}
          width={400}
          height={200}
          alt={title}
          className="rounded-t-xl h-48 object-cover object-left"
        />
        <div className="p-5 space-y-2">
          <div className="text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
            {trimmedTitle}
          </div>
          <p className="text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">
            {trimmedContent}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {stacks?.map((stack: string, index: number) => (
              <div key={index} className="w-6">
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
