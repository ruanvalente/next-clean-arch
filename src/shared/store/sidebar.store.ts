import { create } from "zustand";

type NavItem = {
  label: string;
  icon: string;
  route: string;
}

type SidebarState = {
  isOpen: boolean;
  isMobile: boolean;
  navItems: NavItem[];

  setIsMobile: (value: boolean) => void;
  toggle: () => void;
  setOpen: (value: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  isMobile: false,

  navItems: [
    { label: "Dashboard", icon: "🏠", route: "/dashboard" },
    { label: "Tasks", icon: "✓", route: "/tasks" },
    { label: "Configurations", icon: "⚙", route: "/settings" },
  ],

  setIsMobile: (value) => set({ isMobile: value }),
  setOpen: (value) => set({ isOpen: value }),
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
}));
