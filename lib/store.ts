import { create } from "zustand";

interface useMenuStore {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const useMenuStore = create<useMenuStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
