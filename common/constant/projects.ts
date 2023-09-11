import { IProjectItem } from "../types/projects";

export const PROJECTS: IProjectItem[] = [
  {
    id: 1,
    title: "TerraKota Residence - Real Project",
    slug: "terrakota-residence",
    tag: "Frontend Web",
    description:
      "Introducing TerraKota Residence - a website to showcase a unique residential complex that offers modern architecture and serene natural surroundings. Utilizing cutting-edge technology and innovative design, this project features a range of functionalities including company profile, housing products, photo gallery, purchase promo, and a compelling blog. Equipped with an admin dashboard, users are able to manage the entire website effortlessly with ease. Developed with ReactJS, React Query, React Quill, Tailwind CSS, Chakra UI, and etc.",
    keywords:
      "Personal website, portfolio, and blog built with Next.js, TypeScript, Tailwind CSS, SWR , Postgresql, and Prisma.",
    image:
      "https://res.cloudinary.com/dqhjsjrqc/image/upload/v1693463771/Personal/terrakota-residence.jpg",
    stacks: ["React JS", "Tailwind CSS", "Chakra UI", "React Query"],
    link_demo: {
      label: "Live Demo",
      url: "https://terrabumipersada.com/",
    },
    link_source: {
      label: "See on Github",
      url: "",
      icon: "Github",
    },
    is_show: true,
  },
  {
    id: 2,
    title: "Airbnb Clone - Case Study",
    slug: "airbnb-clone",
    tag: "Fullstack Web",
    description:
      "I am pleased to present the Airbnb Clone project, a fullstack web application that I developed using NextJs, MongoDB, TailwindCSS, Prisma, and Typescript. This project demonstrates my ability to design and implement a web application with property search, booking, and rental dashboard features, while ensuring an attractive and responsive user interface. In this project, I combined my knowledge in frontend and backend development to create a seamless and functional user experience.",
    keywords:
      "Personal website, portfolio, and blog built with Next.js, TypeScript, Tailwind CSS, SWR, Postgresql, and Prisma.",
    image:
      "https://res.cloudinary.com/dqhjsjrqc/image/upload/v1694415464/Personal/airbnb-clone-case-study.jpg",
    stacks: ["Next JS", "Tailwind CSS", "TypeScript", "Mongo DB", "Prisma"],
    link_demo: {
      label: "Live Demo",
      url: "https://airbnb-clone-muafalah.vercel.app/",
    },
    link_source: {
      label: "See on Github",
      url: "https://github.com/muafalah/airbnb-clone",
      icon: "Github",
    },
    is_show: true,
  },
  {
    id: 3,
    title: "Digifund - Case Study",
    slug: "digifund",
    tag: "Frontend Web",
    description:
      "Introducing the 'Digifund' website project that I developed using NextJS and Framer Motion. This website presents the company 'Digifund,' which focuses on startup funding, with an attractive and interactive interface design. The website not only clearly communicates information about the company and their services, but also enhances the user experience through smooth and dynamic animations created by Framer Motion, creating a strong impression of the company's innovation and professionalism.",
    keywords:
      "Personal website, portfolio, and blog built with Next.js, TypeScript, Tailwind CSS, SWR, Postgresql, and Prisma.",
    image:
      "https://res.cloudinary.com/dqhjsjrqc/image/upload/v1694410290/Personal/digifund-case-study.jpg",
    stacks: ["Next JS", "Framer Motion", "CSS"],
    link_demo: {
      label: "Live Demo",
      url: "https://digifund-muafalah.vercel.app/",
    },
    link_source: {
      label: "See on Github",
      url: "https://github.com/muafalah/digifund",
      icon: "Github",
    },
    is_show: true,
  },
  {
    id: 4,
    title: "Skilvul Challenge: Mentor On Demand - Real Project",
    slug: "skilvul-mentor-on-demand",
    tag: "UI/UX Design",
    description:
      "In this UX case study, I detail the development of an on-demand mentorship service feature, allowing students to engage in private mentoring sessions with industry experts using Design Thinking metodology and Usability Testing. The primary goal was to create a seamless platform for students to easily connect with specialized mentors in their respective fields by offering personalized one-on-one mentoring, the aim was to provide valuable insights, guidance, and knowledge transfer, enhancing the learning journey.",
    keywords:
      "Skilvul Challenge, Mentor On Demand, UX Case Study, Design Thinking, user experience, online courses, wireframe, user flows",
    image:
      "https://miro.medium.com/v2/resize:fit:2800/format:webp/1*_sFUqll25dmit5YKSLwsaA.png",
    stacks: ["Figma"],
    link_demo: {
      label: "Live Demo",
      url: "https://bit.ly/3G6hu6u",
    },
    link_source: {
      label: "See on Medium",
      url: "https://medium.com/@muh.ifa.amrillah/skilvul-challenge-mentor-on-demand-ux-case-study-d9fc569bc1d",
      icon: "Medium",
    },
    is_show: true,
  },
  {
    id: 5,
    title: "Skillab, Easy Way to Improve Your Skills - Case Study",
    slug: "skillab-ux-case-study",
    tag: "UI/UX Design",
    description:
      "In this UX case study, I detail the creation of a mobile-accessible application designed to provide online skill development classes. The primary objective was to develop a streamlined platform enabling users to access skill development classes conveniently via smartphones by providing a user-friendly interface and mobile-first design, the aim was to facilitate remote learning and skill enhancement.",
    keywords:
      "Skillab, UX case study, user-friendly interface, learning motivation, online courses, digital talent, edutech, UI design, usability testing, prototype, wireframe, user flow, high-fidelity, mobile application",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GlsDBZDgarmLUQl9Gc5tnw.jpeg",
    stacks: ["Figma"],
    link_demo: {
      label: "Live Demo",
      url: "https://bit.ly/3Cbc0FX",
    },
    link_source: {
      label: "See on Medium",
      url: "https://medium.com/@muh.ifa.amrillah/ux-case-study-skillab-1f46848db76f",
      icon: "Medium",
    },
    is_show: true,
  },
];

type tagProjectProps = {
  [key: string]: string;
};

export const TAG: tagProjectProps = {
  "UI/UX Design": "bg-purple-300",
  "Frontend Web": "bg-red-300",
  "Backend Web": "bg-blue-300",
  "Fullstack Web": "bg-green-300",
};
