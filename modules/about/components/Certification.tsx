"use client";

import { motion } from "framer-motion";
import { PiCertificateBold } from "react-icons/pi";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import CertificationCard from "./CertificationCard";
import { CERTIFICATIONS } from "@/common/constant/certification";

export default function Certification() {
  const certifications = CERTIFICATIONS;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Certification"
          icon={<PiCertificateBold className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My learning experience to improve skills.
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 pt-2">
        {certifications?.map((certification, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <CertificationCard key={index} {...certification} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
