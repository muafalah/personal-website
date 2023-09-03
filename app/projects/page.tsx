import { Metadata } from "next";
import Projects from "@/modules/projects";
import PageHeading from "@/common/components/elements/PageHeading";
import Container from "@/common/components/elements/Container";
import { PROJECTS } from "@/common/constant/projects";
import { METADATA_GLOBAL, METADATA_PROJECTS } from "@/common/constant/metadata";

export const metadata: Metadata = {
  title: `${METADATA_PROJECTS.title} | ${METADATA_GLOBAL.exTitle}`,
  description: METADATA_PROJECTS.description,
  keywords: METADATA_PROJECTS.keywords,
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

const PAGE_DESCRIPTION =
  "Showcasing my passion for technology, design, and problem-solving through code.";

export default async function ProjectsPage() {
  const projects = PROJECTS;

  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading
          title={METADATA_PROJECTS.title}
          description={PAGE_DESCRIPTION}
        />
        <Projects projects={projects} />
      </Container>
    </>
  );
}
