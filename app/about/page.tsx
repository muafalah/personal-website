import { Metadata } from "next";
import About from "@/modules/about";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA_ABOUT, METADATA_GLOBAL } from "@/common/constant/metadata";

export const metadata: Metadata = {
  title: `${METADATA_ABOUT.title} | ${METADATA_GLOBAL.exTitle}`,
  description: METADATA_ABOUT.description,
  keywords: METADATA_ABOUT.keywords,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

const PAGE_DESCRIPTION = "A short story of me";

export default function AboutPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading
          title={METADATA_ABOUT.title}
          description={PAGE_DESCRIPTION}
        />
        <About />
      </Container>
    </>
  );
}
