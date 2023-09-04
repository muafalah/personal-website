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
  fields: ["Frontend Developer", "UI/UX Designer"],
  description:
    "With 8+ months of frontend web development and 1.5+ years of UI/UX design experience, I excel in crafting captivating and responsive websites. Committed to optimizing user experiences and implementing efficient code using ReactJS, NextJS, Tailwind CSS, and etc. I'm passionate about user-centric, visually engaging design, constantly staying updated on emerging trends. Skilled in cross-functional collaboration, I thrive on creating web applications that exceed client and user expectations.",
  location: "Malang, Indonesia.",
  profile_url:
    "https://res.cloudinary.com/dqhjsjrqc/image/upload/v1693454664/Personal/personal-photo-profile.jpg",
  resume_url:
    "https://res.cloudinary.com/dvlbwm8c1/image/upload/f_auto,q_auto/v1/codebayu/c7y1km2xd0sgvnvjlzyr",
  keywords:
    "muhammad ifa amrillah, portfolio website, frontend developer, ui/ux designer, react js, next js",
  creator: "Muhammad Ifa Amrillah",
  url: process.env.DOMAIN,
  siteName: "Muhammad Ifa Amrillah",
  locale: "id-ID",
  exTitle: "Muhammad Ifa Amrillah",
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
