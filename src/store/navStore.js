import { create } from "zustand";

const useNavStore = create((set) => ({
    title: "Accueil",
    setTitle: (newTitle) => set({ title: newTitle }) 
}));

export default useNavStore;