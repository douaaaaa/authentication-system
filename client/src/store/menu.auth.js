import { create } from "zustand";

export const useMenuStore = create((set) => ({
  showMenu: false,
  toggleMenu: (state) => set({ showMenu: !state.showMenu }),
}));
