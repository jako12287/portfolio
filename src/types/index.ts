export type RootLayoutProps = {
  children: React.ReactNode;
};

export type SidebarMenuProps = {
  open: boolean;
  toggleSidebar: () => void;
};

export type HeaderProps = {
  toggleSidebar: () => void;
};

export type BtnMenuProps = {
  toggleSidebar: () => void;
};
