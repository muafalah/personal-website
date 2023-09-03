import Breakline from "@/common/components/elements/Breakline";
import Summary from "./Summary";
import Certification from "./Certification";

export default function About() {
  return (
    <section className="flex flex-col">
      <Summary />
      <Breakline className="mt-8 mb-6" />
      <Certification />
    </section>
  );
}
