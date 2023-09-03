import Tooltip from "@/common/components/elements/Tooltip";
import { STACKS } from "@/common/constant/stacks";
import { IProjectItem } from "@/common/types/projects";
import Image from "next/image";
import ProjectLink from "./ProjectLink";
import MDXComponent from "@/common/components/elements/MDXComponent";

export default function ProjectDetail({
  title,
  description,
  image,
  stacks,
  link_demo,
  link_source,
  content,
}: IProjectItem) {
  return (
    <div className="space-y-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between">
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-[15px] mb-1 text-neutral-700 dark:text-neutral-300">
            Tech Stack :
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {stacks?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>
                  <div className="w-6 h-6">{STACKS[stack]}</div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          label_demo={link_demo.label || "Live Demo"}
          url_demo={link_demo.url || ""}
          label_source={link_source.label || ""}
          url_source={link_source.url || ""}
          icon_source={link_source.icon || ""}
        />
      </div>
      <Image
        src={image}
        width={800}
        height={400}
        alt={title}
        className="hover:scale-105 transition-all duration-300"
      />
      <div>
        <h2 className="text-xl font-medium font-sora">Introduction</h2>
        <p className="space-y-6 leading-[1.8] dark:text-neutral-300 mt-5">
          {description}
        </p>
      </div>
      {content && (
        <div className="space-y-6 leading-[1.8] dark:text-neutral-300 mt-5">
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
    </div>
  );
}
