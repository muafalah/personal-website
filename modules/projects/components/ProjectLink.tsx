import { STACKS } from "@/common/constant/stacks";
import Link from "next/link";
import { ReactNode } from "react";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

interface LinkComponentProps {
  url: string;
  text: string;
  icon?: ReactNode;
}

interface ProjectLinkProps {
  title?: string;
  label_demo: string;
  url_demo: string;
  label_source: string;
  url_source: string;
  icon_source: string;
}

export default function ProjectLink({
  title,
  label_demo,
  url_demo,
  label_source,
  url_source,
  icon_source,
}: ProjectLinkProps) {
  const LinkComponent = ({ url, text, icon }: LinkComponentProps) => {
    const eventName = `Click ${text} - Project ${title}`;

    return (
      <Link href={url} target="_blank" passHref data-umami-event={eventName}>
        <div className="flex gap-2 items-center font-medium text-neutral-700 dark:text-neutral-300 ">
          <div className="w-6 h-6">{icon}</div>
          <span className="text-[15px] dark:text-teal-500 hover:dark:text-teal-400 transition-all duration-300">
            {text}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex gap-4">
      {url_source.length > 1 && (
        <LinkComponent
          url={url_source}
          text={label_source}
          icon={STACKS[icon_source]}
        />
      )}
      {url_source.length > 1 && url_demo.length > 1 && (
        <span className="text-neutral-400 dark:text-neutral-600">|</span>
      )}
      {url_demo.length > 1 && (
        <LinkComponent
          url={url_demo}
          text={label_demo}
          icon={<LinkIcon size={22} />}
        />
      )}
    </div>
  );
}
