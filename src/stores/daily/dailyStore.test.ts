import { expect, test, describe } from "vitest";
import { useDailyStore } from "./dailyStore";

describe("dailyStore internals", () => {

    test("change target value", () => {

        useDailyStore.getState().setTargetValue(8.89);

        expect(useDailyStore.getState().targetValue).toBe(8.89);
    });

    test("handle change, integer", () => {

        const nominal = "200_euro";
        const index = 0;
        const newValue = "3";
        useDailyStore.getState().handleChange(nominal, index, newValue);

        const changedValue = useDailyStore.getState().dailyValues;
        expect(changedValue[nominal][index]).toBe(parseInt(newValue));
    });

    test("handle change, float", () => {

        const nominal = "200_euro";
        const index = 0;
        const newValue = "3.33";
        useDailyStore.getState().handleChange(nominal, index, newValue);

        const changedValue = useDailyStore.getState().dailyValues;
        expect(changedValue[nominal][index]).toBe(parseInt(newValue));
    });
	
	test("is fetching status change", () => {
		useDailyStore.getState().setIsFetchingData(true);

		expect(useDailyStore.getState().isFetchingData).toBe(true);
	});

	test("change fetched data", () => {
		useDailyStore.getState().setFetchedData({
			apiDiffValue: "5.55",
			apiTotalValue: "7.77"
		});

		const fetchedData = useDailyStore.getState().fetchedData;

		expect(fetchedData.apiDiffValue).toBe("5.55");
		expect(fetchedData.apiTotalValue).toBe("7.77");
	});
});
