export interface IProjectItem {
  id: number;
  title: string;
  slug: string;
  tag: string;
  description: string;
  keywords: string;
  image: string;
  stacks: string[];
  link_demo: { label: string; url: string };
  link_source: { label: string; url: string; icon: string };
  is_show: boolean;
  content?: string;
}

export interface IProjectsItemProps {
  projects: IProjectItem[];
}
