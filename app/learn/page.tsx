import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import LearnModule from "@/modules/learn";
import { LEARN_CONTENTS } from "@/common/constant/learn";
import { METADATA_GLOBAL, METADATA_LEARN } from "@/common/constant/metadata";

export const metadata: Metadata = {
  title: `${METADATA_LEARN.title} | ${METADATA_GLOBAL.exTitle}`,
  description: METADATA_LEARN.description,
  keywords: METADATA_LEARN.keywords,
  alternates: {
    canonical: `${process.env.DOMAIN}/learn`,
  },
};

const PAGE_DESCRIPTION =
  "It's not a course, it's my personal learning notes. But if you are interested, let's learn together.";
const filteredContents =
  LEARN_CONTENTS.filter((content) => content.is_show) || [];

export default function LearnPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading
          title={METADATA_LEARN.title}
          description={PAGE_DESCRIPTION}
        />
        <LearnModule contents={filteredContents} />
      </Container>
    </>
  );
}
