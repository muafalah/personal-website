import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiApollographql,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
  SiChakraui,
  SiExpo,
  SiSass,
  SiGulp,
  SiFirebase,
  SiFramer,
  SiNuxtdotjs,
  SiVuedotjs,
  SiJest,
  SiExpress,
  SiRedux,
  SiReactquery,
  SiHtml5,
  SiCss3,
  SiPrisma,
  SiNodedotjs,
  SiGithub,
  SiMongodb,
  SiMedium,
  SiPusher,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFigmaLogo } from "react-icons/pi";

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = "100%";

export const STACKS: stacksProps = {
  "React JS": <SiReact size={iconSize} className="text-sky-500" />,
  "Next JS": <SiNextdotjs size={iconSize} />,
  "Tailwind CSS": <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  "Chakra UI": <SiChakraui size={iconSize} className="text-teal-500" />,
  "React Query": <SiReactquery size={iconSize} className="text-red-600" />,
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
  ),
  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  Apollo: <SiApollographql size={iconSize} />,
  WordPress: <SiWordpress size={iconSize} />,
  Laravel: <SiLaravel size={iconSize} className="text-red-500" />,
  "Material UI": <SiMui size={iconSize} className="text-sky-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  "React Native": <SiReact size={iconSize} className="text-sky-600" />,
  Expo: <SiExpo size={iconSize} />,
  SASS: <SiSass size={iconSize} className="text-pink-600" />,
  Gulp: <SiGulp size={iconSize} className="text-red-500" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  "Framer Motion": <SiFramer size={iconSize} />,
  "Nuxt JS": <SiNuxtdotjs size={iconSize} className="text-green-600" />,
  "Vue JS": <SiVuedotjs size={iconSize} className="text-green-500" />,
  Jest: <SiJest size={iconSize} className="text-orange-600" />,
  "Express JS": <SiExpress size={iconSize} />,
  Medium: <SiMedium size={iconSize} />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
  "Node JS": <SiNodedotjs size={iconSize} className="text-green-600" />,
  "Mongo DB": <SiMongodb size={iconSize} className="text-green-700" />,
  Github: <SiGithub size={iconSize} />,
  "Shadcn UI": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-6 w-6"
    >
      <rect width={256} height={256} fill="none" />
      <line
        x1={208}
        y1={128}
        x2={128}
        y2={208}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <line
        x1={192}
        y1={40}
        x2={40}
        y2={192}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  ),
  Figma: <PiFigmaLogo size={iconSize} className="text-rose-500" />,
  Pusher: <SiPusher size={iconSize} className="text-green-400" />,
};
