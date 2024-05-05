import { StoreApi, UseBoundStore, create } from "zustand";

export type WeeklyObjectNominal =
    | "2_euro"
    | "1_euro"
    | "50_cent"
    | "20_cent"
    | "10_cent"
    | "5_cent"
    | "2_cent"
    | "1_cent";

export type WeeklyObjectType = {
    [key in WeeklyObjectNominal]: number[];
};

type useWeeklyStoreType = {
    isSelected: boolean;
    setSelected: (isSelected: boolean) => void;
    boxValues: WeeklyObjectType;
    rollValues: WeeklyObjectType;
    resetValues: () => void;
    handleBoxChange: (value: string, nominal: WeeklyObjectNominal) => void;
    handleRollChange: (value: string, index: number, nominal: WeeklyObjectNominal) => void;
	totalResult: number;
	setTotalResult: (newTotalResult: number) => void;
};

const useWeeklyStore: UseBoundStore<StoreApi<useWeeklyStoreType>> =
    create<useWeeklyStoreType>((set) => ({
        isSelected: false,
        setSelected: (isSelected: boolean) => set({ isSelected }),
        boxValues: {
            "2_euro": Array(1).fill(0),
            "1_euro": Array(1).fill(0),
            "50_cent": Array(1).fill(0),
            "20_cent": Array(1).fill(0),
            "10_cent": Array(1).fill(0),
            "5_cent": Array(1).fill(0),
            "2_cent": Array(1).fill(0),
            "1_cent": Array(1).fill(0),
        },
        rollValues: {
            "2_euro": Array(2).fill(0),
            "1_euro": Array(2).fill(0),
            "50_cent": Array(2).fill(0),
            "20_cent": Array(2).fill(0),
            "10_cent": Array(2).fill(0),
            "5_cent": Array(2).fill(0),
            "2_cent": Array(2).fill(0),
            "1_cent": Array(2).fill(0),
        },
        resetValues: () =>
            set({
                boxValues: {
                    "2_euro": Array(1).fill(0),
                    "1_euro": Array(1).fill(0),
                    "50_cent": Array(1).fill(0),
                    "20_cent": Array(1).fill(0),
                    "10_cent": Array(1).fill(0),
                    "5_cent": Array(1).fill(0),
                    "2_cent": Array(1).fill(0),
                    "1_cent": Array(1).fill(0),
                },
                rollValues: {
                    "2_euro": Array(2).fill(0),
                    "1_euro": Array(2).fill(0),
                    "50_cent": Array(2).fill(0),
                    "20_cent": Array(2).fill(0),
                    "10_cent": Array(2).fill(0),
                    "5_cent": Array(2).fill(0),
                    "2_cent": Array(2).fill(0),
                    "1_cent": Array(2).fill(0),
                },
            }),
        handleBoxChange: (value: string, nominal: WeeklyObjectNominal) =>
            set((state) => {
                const newValues = { ...state.boxValues };
                const newValue = parseInt(value);
                newValues[nominal] = Array(1).fill(newValue);
                return { boxValues: newValues };
            }),
        handleRollChange: (value: string, index: number, nominal: WeeklyObjectNominal) =>
            set((state) => {
                const newValue = parseInt(value, 10);

                const newValues = { ...state.rollValues };
                // deep copy of the array
                newValues[nominal] = [...newValues[nominal]];
                newValues[nominal][index] = newValue;
                return { rollValues: newValues };
            }),
        totalResult: 0,
        setTotalResult: (newTotalResult: number) =>
            set({ totalResult: newTotalResult }),
    }));

export { useWeeklyStore };
