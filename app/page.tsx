import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";
import { METADATA_GLOBAL } from "@/common/constant/metadata";

export const metadata: Metadata = {
  title: `${METADATA_GLOBAL.creator} | Personal Website`,
  alternates: {
    canonical: METADATA_GLOBAL.url,
  },
};

export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
        <Home />
      </Container>
    </>
  );
}
