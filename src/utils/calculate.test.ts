import { expect, test, describe } from "vitest";
import { calculateTotalRollValue, calculateValueOfAllCoins } from "./calculate";
import { WeeklyObjectType } from "../stores/weekly/weeklyStore";

describe("calculate - calculateValueOfAllCoins", () => {

    test("sum all coins in one array of variable size - 5 items", () => {

        const testArray = [1, 2, 3, 4, 5];
        const testNominal = "2_euro";
        const total = calculateValueOfAllCoins(testNominal, testArray);
        // 15 * 25 * 2
        expect(total).toBe((1 + 2 + 3 + 4 + 5) * 25 * 2);
    });

    test("sum all coins in one array of variable size - 7 items", () => {

        const testArray = [1, 2, 3, 4, 5, 6, 7];
        const testNominal = "2_euro";
        const total = calculateValueOfAllCoins(testNominal, testArray);
        // 28 * 25 * 2
        expect(total).toBe((1 + 2 + 3 + 4 + 5 + 6 + 7) * 25 * 2);
    });

    test("sum all coins in one array of variable size - 1 item", () => {

        const testArray = [1];
        const testNominal = "2_euro";
        const total = calculateValueOfAllCoins(testNominal, testArray);
        // 15 * 25 * 2
        expect(total).toBe((1) * 25 * 2);
    });

});


/**
* calculates the total value of all coins in the given rolls
* @param rollValues the values of the coins
* @returns the total value of all coins in the given rolls
*/
// export function calculateTotalRollValue(rollValues: WeeklyObjectType) {
//     let total = 0;
//     Object.entries(rollValues).forEach(
//         ([nominal, values]: [string, number[]]) => {
//             const sum = values.reduce((acc, value) => acc + value, 0);
//             const nominalKey = nominal as WeeklyObjectNominal;
//             const rollFactor = coinValues[nominalKey];
//             const coinValue = coinValues[nominalKey];
//             const totalValue = sum * coinValue * rollFactor;
//             total += totalValue;
//         },
//     );
//     return total;
// }

describe("calculate - calculateValueOfAllCoins", () => {

    test("sum value of coin object - only 2_euro", () => {

        const coinObject = {
            "2_euro": [1, 2, 3, 4, 5],
        } as WeeklyObjectType;

        const totalValue = calculateTotalRollValue(coinObject);

        expect(totalValue).toBe((1 + 2 + 3 + 4 + 5) * 2 * 25);
    });

    test("sum value of coin object - all values", () => {

        const coinObject = {
            "2_euro": [1, 2, 3, 4, 5],
            "1_euro": [1, 2, 3, 4, 5],
            "50_cent": [1, 2, 3, 4, 5],
            "20_cent": [1, 2, 3, 4, 5],
            "10_cent": [1, 2, 3, 4, 5],
            "5_cent": [1, 2, 3, 4, 5],
            "2_cent": [1, 2, 3, 4, 5],
            "1_cent": [1, 2, 3, 4, 5],
        } as WeeklyObjectType;

        const totalValue = calculateTotalRollValue(coinObject);

        expect(totalValue).toBe(((1 + 2 + 3 + 4 + 5) * 2 * 25) +
            ((1 + 2 + 3 + 4 + 5) * 1 * 25) +
            ((1 + 2 + 3 + 4 + 5) * 0.5 * 40) +
            ((1 + 2 + 3 + 4 + 5) * 0.2 * 40) +
            ((1 + 2 + 3 + 4 + 5) * 0.1 * 40) +
            ((1 + 2 + 3 + 4 + 5) * 0.05 * 50) +
            ((1 + 2 + 3 + 4 + 5) * 0.02 * 50) +
            ((1 + 2 + 3 + 4 + 5) * 0.01 * 50));
    });

	test("sum value of coin object - 0 in array", () => {

		const coinObject = {
			"1_euro": [0],
		} as WeeklyObjectType;

		const totalValue = calculateTotalRollValue(coinObject);

		expect(totalValue).toBe((0) * 1 * 25);
	});
});
