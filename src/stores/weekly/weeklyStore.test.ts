import { expect, test, describe } from "vitest";
import { useWeeklyStore } from "./weeklyStore";

describe("weeklyStore", () => {

    test("check for setSelected change", () => {

        useWeeklyStore.getState().setSelected(true);
        expect(useWeeklyStore.getState().isSelected).toBe(true);
    });

    test("check for boxValues change", () => {

        useWeeklyStore.getState().handleBoxChange("1", "2_euro");
        expect(useWeeklyStore.getState().boxValues["2_euro"]).toEqual([1]);
    });

    test("check for rollValues change", () => {

        useWeeklyStore.getState().handleRollChange("1", 0, "2_euro");
        expect(useWeeklyStore.getState().rollValues["2_euro"]).toEqual([1, 0]);
    });

    test("check for resetValues change", () => {

        useWeeklyStore.getState().resetValues();
        expect(useWeeklyStore.getState().boxValues).toEqual({
            "2_euro": Array(1).fill(0),
            "1_euro": Array(1).fill(0),
            "50_cent": Array(1).fill(0),
            "20_cent": Array(1).fill(0),
            "10_cent": Array(1).fill(0),
            "5_cent": Array(1).fill(0),
            "2_cent": Array(1).fill(0),
            "1_cent": Array(1).fill(0),
        });
        expect(useWeeklyStore.getState().rollValues).toEqual({
            "2_euro": Array(2).fill(0),
            "1_euro": Array(2).fill(0),
            "50_cent": Array(2).fill(0),
            "20_cent": Array(2).fill(0),
            "10_cent": Array(2).fill(0),
            "5_cent": Array(2).fill(0),
            "2_cent": Array(2).fill(0),
            "1_cent": Array(2).fill(0),
        });
    });
});
