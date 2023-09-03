import Tooltip from "@/common/components/elements/Tooltip";
import { STACKS } from "@/common/constant/stacks";
import React from "react";

export default function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <Tooltip title={skill}>{STACKS[skill]}</Tooltip>
    </div>
  );
}
