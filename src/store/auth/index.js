import create from "zustand";

export const useUser = create((set) => ({
  userLoged: false,

  logInto: () => set(() => ({ userLoged: true })),
  goOut: () => set({ userLoged: false }),
}));
