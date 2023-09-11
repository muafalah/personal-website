import BackButton from "@/common/components/elements/BackButton";
import Breakline from "@/common/components/elements/Breakline";
import Container from "@/common/components/elements/Container";
import { METADATA_GLOBAL } from "@/common/constant/metadata";
import loadMdxFiles from "@/common/libs/mdx";
import ContentDetail from "@/modules/learn/components/ContentDetail";
import ContentDetailHeader from "@/modules/learn/components/ContentDetailHeader";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

interface Params {
  content: string;
  slug: string;
}

interface LearnContentDetailPageProps {
  params: Params;
}

export async function generateMetadata(
  { params }: LearnContentDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getContentDetail(params);
  const { frontMatter: meta } = data as any;
  return {
    title: `${meta?.title} | ${METADATA_GLOBAL.exTitle}`,
    openGraph: {
      images: meta?.cover_url,
      url: METADATA_GLOBAL.url,
      siteName: METADATA_GLOBAL.siteName,
      locale: METADATA_GLOBAL.locale,
      type: "article",
      authors: METADATA_GLOBAL.creator,
    },
    category: meta.category,
    keywords: meta.keywords,
    description: meta.description,
    alternates: {
      canonical: `${process.env.DOMAIN}/learn/${params.content}/${params.slug}`,
    },
  };
}

export default async function LearnContentDetailPage({
  params,
}: LearnContentDetailPageProps) {
  const data = await getContentDetail(params);
  const { content, frontMatter } = data as any;
  return (
    <>
      <Container data-aos="fade-up">
        <BackButton />
        <ContentDetailHeader {...frontMatter} />
        {content && (
          <>
            <ContentDetail content={content} />
            <Breakline className="mt-14 mb-14" />
          </>
        )}
      </Container>
    </>
  );
}

async function getContentDetail(params: Params) {
  const contentList = await loadMdxFiles("learn", params.content);
  const contentData = contentList.find((item) => item.slug === params.slug);
  if (!contentData) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  return contentData;
}
