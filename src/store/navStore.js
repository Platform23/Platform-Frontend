import { create } from "zustand";

const useNavStore = create((set) => ({
    page: "Accueil",
    setPage: (newPage) => set({ page: newPage }) 
}));

export default useNavStore;