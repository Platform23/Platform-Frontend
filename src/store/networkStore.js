import { create } from "zustand";

const useNetworkStore = create((set) => ({
    network: null,
    setNetwork: (newNetwork) => set({ network: newNetwork }) 
}));

export default useNetworkStore;