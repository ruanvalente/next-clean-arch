"use client";

import { useEffect } from "react";
import { storageService } from "../services/storage.service";
import { useSidebarStore } from "../store/sidebar.store";

const SIDEBAR_KEY = "sidebarOpen";
const BREAKPOINT = "(max-width: 767px)";

export function useSidebar() {
  const { isOpen, isMobile, navItems, setIsMobile, setOpen, toggle } =
    useSidebarStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia(BREAKPOINT);

    setIsMobile(mediaQuery.matches);

    if (mediaQuery.matches) {
      setOpen(false);
    } else {
      const stored = storageService.get<boolean>(SIDEBAR_KEY);
      setOpen(stored ?? true);
    }

    const handler = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [setIsMobile, setOpen]);

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile, setOpen]);

  useEffect(() => {
    if (!isMobile) {
      storageService.set(SIDEBAR_KEY, isOpen);
    }
  }, [isOpen, isMobile]);

  return {
    isOpen,
    navItems,
    toggle,
  };
}
