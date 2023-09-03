import React from "react";
import Image from "../../elements/Image";
import Link from "next/link";
import Tooltip from "../../elements/Tooltip";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import clsx from "clsx";
import { METADATA_GLOBAL } from "@/common/constant/metadata";

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

export default function ProfileHeader({
  expandMenu,
  imageSize,
}: ProfileHeaderProps) {
  const { fullname, profile_url, username_url, username } = METADATA_GLOBAL;

  return (
    <div
      className={clsx(
        "flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full",
        expandMenu && "flex-col !items-start"
      )}
    >
      <Image
        src={profile_url}
        alt="profile"
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded="rounded-full"
        className="lg:hover:scale-105"
      />
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <Link href="/" passHref>
          <h2 className="flex-grow text-lg lg:text-xl font-sora font-medium">
            {fullname}
          </h2>
        </Link>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
      <Link
        href={username_url}
        target="_blank"
        className="hidden lg:flex text-sm font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300"
      >
        @{username}
      </Link>
    </div>
  );
}
