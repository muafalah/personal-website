import Link from "next/link";
import Card from "@/common/components/elements/Card";
import Image from "@/common/components/elements/Image";
import { CertificationProps } from "@/common/types/certification";

export default function CertificationCard({
  title,
  company,
  url,
  image,
}: CertificationProps) {
  const trimmedTitle = title.slice(0, 70) + (title.length > 70 ? "..." : "");

  return (
    <Link href={url} target="_blank">
      <Card className="relative border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] cursor-pointer">
        <div
          className={`absolute top-0 right-0 bg-neutral-300 text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]`}
        >
          {company}
        </div>
        <Image
          src={image}
          width={400}
          height={200}
          alt={title}
          className="rounded-t-xl h-52 object-cover object-left"
        />
        <div className="py-3 px-4">
          <div className="text-md font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
            {trimmedTitle}
          </div>
        </div>
      </Card>
    </Link>
  );
}
