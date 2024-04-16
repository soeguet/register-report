import { StoreApi, UseBoundStore, create } from "zustand";

export type DailyObjectNominal =
    | "200_euro"
    | "100_euro"
    | "50_euro"
    | "20_euro"
    | "10_euro"
    | "5_euro"
    | "2_euro"
    | "1_euro"
    | "50_cent"
    | "20_cent"
    | "10_cent"
    | "5_cent"
    | "2_cent"
    | "1_cent";

export type DailyObjectType = {
    [key in DailyObjectNominal]: string[];
};

type DailyStore = {
    targetValue: number;
    setTargetValue: (value: number) => void;
    dailyValues: DailyObjectType;
    resetValues: () => void;
    handleChange: (
        nominal: DailyObjectNominal,
        index: number,
        value: string,
    ) => void;
};

const useDailyStore: UseBoundStore<StoreApi<DailyStore>> = create<DailyStore>(
    (set) => ({
        targetValue: 0,
        setTargetValue: (value) => set({ targetValue: value }),
        dailyValues: {
            "200_euro": Array(5).fill(""),
            "100_euro": Array(5).fill(""),
            "50_euro": Array(5).fill(""),
            "20_euro": Array(5).fill(""),
            "10_euro": Array(5).fill(""),
            "5_euro": Array(5).fill(""),
            "2_euro": Array(5).fill(""),
            "1_euro": Array(5).fill(""),
            "50_cent": Array(5).fill(""),
            "20_cent": Array(5).fill(""),
            "10_cent": Array(5).fill(""),
            "5_cent": Array(5).fill(""),
            "2_cent": Array(5).fill(""),
            "1_cent": Array(5).fill(""),
        },
        resetValues: () =>
            set({
                targetValue: 0,
                dailyValues: {
                    "200_euro": Array(5).fill(""),
                    "100_euro": Array(5).fill(""),
                    "50_euro": Array(5).fill(""),
                    "20_euro": Array(5).fill(""),
                    "10_euro": Array(5).fill(""),
                    "5_euro": Array(5).fill(""),
                    "2_euro": Array(5).fill(""),
                    "1_euro": Array(5).fill(""),
                    "50_cent": Array(5).fill(""),
                    "20_cent": Array(5).fill(""),
                    "10_cent": Array(5).fill(""),
                    "5_cent": Array(5).fill(""),
                    "2_cent": Array(5).fill(""),
                    "1_cent": Array(5).fill(""),
                },
            }),
        handleChange: (
            nominal: DailyObjectNominal,
            index: number,
            value: string,
        ) =>
            set((state) => {
                const newDailyValues: DailyObjectType = {
                    ...state.dailyValues,
                };
                newDailyValues[nominal][index] = value;
                return { dailyValues: newDailyValues };
            }),
    }),
);

export { useDailyStore };
