import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA_GLOBAL } from "@/common/constant/metadata";
import { PROJECTS } from "@/common/constant/projects";
import loadMdxFiles from "@/common/libs/mdx";

import ProjectDetail from "@/modules/projects/components/ProjectDetail";

interface ProjectsDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: ProjectsDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = PROJECTS.find((project) => project.slug === params.slug);

  return {
    title: `${project?.title} | ${METADATA_GLOBAL.exTitle}`,
    description: project?.description,
    openGraph: {
      images: project?.image,
      authors: METADATA_GLOBAL.creator,
      url: `${METADATA_GLOBAL.url}/${project?.slug}`,
      siteName: METADATA_GLOBAL.siteName,
      locale: METADATA_GLOBAL.locale,
      type: "article",
    },
    keywords: project?.keywords,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectsDetailPageProps) {
  const { project, content } = await getProjectDetail(params.slug);

  return (
    <>
      <Container data-aos="fade-up">
        <BackButton url="/projects" />
        {project && (
          <>
            <PageHeading
              title={project.title}
              // description={project.description}
            />
            <ProjectDetail {...project} content={content?.content} />
          </>
        )}
      </Container>
    </>
  );
}

async function getProjectDetail(slug: string) {
  const project = PROJECTS.find((project) => project.slug === slug) || null;
  const content =
    loadMdxFiles("projects", "/").find((item) => item.slug === slug) || null;

  if (!project) {
    redirect("/404");
  }

  return {
    project,
    content,
  };
}
