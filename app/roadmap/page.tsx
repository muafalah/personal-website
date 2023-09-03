import React from "react";
import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Roadmap from "@/modules/roadmap";
import { METADATA } from "@/common/constant/metadata";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `Roadmap ${METADATA.exTitle}`,
  description:
    "Learning path recomendation and free course playlist for software engineer",
  alternates: {
    canonical: `${process.env.DOMAIN}/roadmap`,
  },
};

const PAGE_TITLE = "Roadmap";
const PAGE_DESCRIPTION = "Learning path recomendation and free course playlist";

export default function RoadmapPage() {
  redirect("/404");

  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Roadmap />
      </Container>
    </>
  );
}
