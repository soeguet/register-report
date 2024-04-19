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
    [key in DailyObjectNominal]: number[];
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
            "200_euro": Array(5).fill(0),
            "100_euro": Array(5).fill(0),
            "50_euro": Array(5).fill(0),
            "20_euro": Array(5).fill(0),
            "10_euro": Array(5).fill(0),
            "5_euro": Array(5).fill(0),
            "2_euro": Array(5).fill(0),
            "1_euro": Array(5).fill(0),
            "50_cent": Array(5).fill(0),
            "20_cent": Array(5).fill(0),
            "10_cent": Array(5).fill(0),
            "5_cent": Array(5).fill(0),
            "2_cent": Array(5).fill(0),
            "1_cent": Array(5).fill(0),
        },
        resetValues: () =>
            set({
                targetValue: 0,
                dailyValues: {
                    "200_euro": Array(5).fill(0),
                    "100_euro": Array(5).fill(0),
                    "50_euro": Array(5).fill(0),
                    "20_euro": Array(5).fill(0),
                    "10_euro": Array(5).fill(0),
                    "5_euro": Array(5).fill(0),
                    "2_euro": Array(5).fill(0),
                    "1_euro": Array(5).fill(0),
                    "50_cent": Array(5).fill(0),
                    "20_cent": Array(5).fill(0),
                    "10_cent": Array(5).fill(0),
                    "5_cent": Array(5).fill(0),
                    "2_cent": Array(5).fill(0),
                    "1_cent": Array(5).fill(0),
                },
            }),
        handleChange: (
            nominal: DailyObjectNominal,
            index: number,
            value: string,
        ) =>
            set((state) => {
                const parsedValue = parseInt(value, 10);

                const newDailyValues = {
                    ...state.dailyValues,
                };
                // deep copy of the array
                newDailyValues[nominal] = [...newDailyValues[nominal]];
                newDailyValues[nominal][index] = parsedValue;

                return { dailyValues: newDailyValues };
            }),
    }),
);

export { useDailyStore };
