import { METADATA_GLOBAL } from "@/common/constant/metadata";

export default function Introduction() {
  const { nickname, fields, location, description } = METADATA_GLOBAL;

  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
        <h1>Hi, I&apos;m {nickname}</h1>{" "}
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          {fields?.map((field, index) => (
            <li key={index}>{field}</li>
          ))}
          <li>
            Based in {location} <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </section>
  );
}
