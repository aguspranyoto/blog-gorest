import { create } from "zustand";

interface useSidebarStore {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<useSidebarStore>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
