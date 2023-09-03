"use client";

import { BiRocket as RocketIcon } from "react-icons/bi";

const Services = () => {
  return (
    <section className="space-y-5 mt-8">
      <div className="p-8 bg-neutral-100 dark:bg-neutral-800 border dark:border-none rounded-xl space-y-4">
        <div className="flex gap-2 items-center">
          <RocketIcon size={24} />
          <h3 className="text-xl font-medium">Lets work together!</h3>
        </div>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2">
          I&apos;m specialize in crafting exceptional digital experiences for
          businesses through strategic development services. Feel free to
          contact me and see how we can collaborate.
        </p>
        <a
          href="mailto:muh.ifa.amrillah@gmail.com"
          data-umami-event="Click Contact Button"
          className="inline-block gap-2 items-center bg-neutral-500 hover:bg-neutral-600 dark:bg-neutral-600 dark:hover:bg-neutral-700 text-neutral-50 py-2.5 px-4 rounded-lg transition-all duration-300 text-[15px] font-sora"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Services;
