import { StoreApi, UseBoundStore, create } from "zustand";

type useWeeklyStoreType = {
    isSelected: boolean;
    setSelected: (isSelected: boolean) => void;
};

const useWeeklyStore: UseBoundStore<StoreApi<useWeeklyStoreType>> =
    create<useWeeklyStoreType>((set) => ({
        isSelected: true,
        setSelected: (isSelected: boolean) => set({ isSelected }),
    }));

export { useWeeklyStore };
