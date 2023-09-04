import { Metadata } from "next";
import Blog from "@/modules/blog";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA_BLOG, METADATA_GLOBAL } from "@/common/constant/metadata";

export const metadata: Metadata = {
  title: `${METADATA_BLOG.title} | ${METADATA_GLOBAL.exTitle}`,
  description: METADATA_BLOG.description,
  keywords: METADATA_BLOG.keywords,
  alternates: {
    canonical: `${process.env.DOMAIN}/blog`,
  },
};

const PAGE_DESCRIPTION =
  "Exploring the world of code, creativity, and constant learning.";

export default async function BlogPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading
          title={METADATA_BLOG.title}
          description={PAGE_DESCRIPTION}
        />
        <Blog />
      </Container>
    </>
  );
}
