import { create } from "zustand";

const useDailyStore = create((set) => ({
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
    handleChange: (nominal, index, value) =>
        set((state) => {
            const newDailyValues = { ...state.dailyValues };
            newDailyValues[nominal][index] = value;
            return { dailyValues: newDailyValues };
        }),
}));

export { useDailyStore };