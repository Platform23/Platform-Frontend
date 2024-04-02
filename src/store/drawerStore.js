import { create } from "zustand";

const useDrawerStore = create((set) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}));

export default useDrawerStore;