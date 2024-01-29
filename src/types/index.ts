import { StaticImageData } from "next/image";


export type SidebarMenuProps = {
  toggleSidebar: () => void;
};

export type BtnMenuProps = {
  toggleSidebar: () => void;
};

export type ProjectDataItem = {
  _id: string;
  backgroundColor: string;
  title: string;
  iconImage: StaticImageData;
  route: string;
};

export type SkillsDataItem = {
  _id: string;
  name: string
  icon: StaticImageData
};