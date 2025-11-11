export const METADATA = {
  creator: "Bayu Setiawan",
  description:
    "Personal website, portfolio, blog, software engineer roadmap, programming tips of Code Bayu",
  keyword:
    "codebayu, bayu setiawan, programming tips, belajar javascript, belajar typescript",
  authors: {
    name: "Bayu Setiawan",
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: "Code Bayu",
    locale: "id-ID",
  },
  exTitle: "| Code Bayu",
  profile:
    "https://res.cloudinary.com/dvlbwm8c1/image/upload/v1693008885/codebayu/ab0kfkhjgymzthooxiea.webp",
};

export const METADATA_GLOBAL = {
  fullname: "M. Ifa Amrillah",
  nickname: "Ari",
  username: "muafalah",
  username_url: "https://github.com/muafalah",
  fields: ["Frontend Developer", "Fullstack Developer"],
  description:
    "Fullstack JavaScript Developer with 3 years of experience building, optimizing, and maintaining scalable web applications across both frontend and backend environments. Skilled in modern technologies such as ReactJS, NextJS, Ant Design, Tailwind CSS, and TypeScript on the frontend, as well as ExpressJS, Node.js, and MySQL on the backend. Committed to writing clean, efficient, and maintainable code while delivering seamless user experiences and robust server-side functionality. Adept at working in cross-functional teams, translating business and design requirements into end-to-end technical solutions. Continuously staying updated with the latest JavaScript ecosystem advancements to deliver reliable, high-quality products that exceed client expectations.",
  location: "Sidoarjo, Indonesia.",
  profile_url:
    "https://res.cloudinary.com/dqhjsjrqc/image/upload/v1693454664/Personal/personal-photo-profile.jpg",
  resume_url:
    "https://res.cloudinary.com/dvlbwm8c1/image/upload/f_auto,q_auto/v1/codebayu/c7y1km2xd0sgvnvjlzyr",
  keywords:
    "muhammad ifa amrillah, portfolio website, frontend developer, ui/ux designer, react js, next js",
  creator: "Muhammad Ifa Amrillah",
  url: process.env.DOMAIN,
  siteName: "Muhammad Ifa Amrillah | Portfolio Website",
  locale: "id-ID",
  exTitle: "Muhammad Ifa Amrillah",
  images:
    "https://res.cloudinary.com/dqhjsjrqc/image/upload/v1693810808/cover-personal-website.jpg",
};

export const METADATA_PROJECTS = {
  title: "Projects",
  description: "Software Engineer portfolio ideas",
  keywords: "portfolio frontend developer",
};

export const METADATA_ABOUT = {
  title: "About",
  description: `${METADATA_GLOBAL.description}`,
  keywords: METADATA_GLOBAL.keywords,
};

export const METADATA_LEARN = {
  title: "Learn",
  description: "Programming tips for software developer",
  keywords:
    "frontend developer, software engineer, react js, javascript, typescript",
};

export const METADATA_BLOG = {
  title: "Blogs",
  description: "My blogs content about programming and software development",
  keywords:
    "blog muhammad ifa amrillah, article, devto, tips trick, programming, developer",
};
