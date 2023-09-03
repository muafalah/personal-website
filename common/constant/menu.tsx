import {
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon,
  BiBookBookmark as LearnIcon,
  BiCategoryAlt as DashboardIcon,
  BiEditAlt as BlogIcon,
  BiEnvelope as ContactIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
  BiLineChart as AnalyticsIcon,
} from "react-icons/bi";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsMedium as MediumIcon,
  BsDribbble as DribbbleIcon,
} from "react-icons/bs";
import { LuWorkflow } from "react-icons/lu";

import { MenuItemProps } from "../types/menu";

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Home",
  },
  {
    title: "About",
    href: "/about",
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: About",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Projects",
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Blog",
  },
  {
    title: "Learn",
    href: "/learn",
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Learn",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: "Pages: Contact",
  },
  {
    title: "Roadmap",
    href: "/roadmap?tribe=frontend-developer",
    icon: <LuWorkflow size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: "Pages: Roadmap",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Dashboard",
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/ifaamrillah/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/muafalah_",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
  },
  {
    title: "Github",
    href: "https://github.com/muafalah",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github",
  },
  {
    title: "Dribbble",
    href: "https://dribbble.com/muafalah_",
    icon: <DribbbleIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Dribbble",
  },
  {
    title: "Medium",
    href: "https://medium.com/@muh.ifa.amrillah",
    icon: <MediumIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Medium",
  },
];
