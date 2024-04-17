// export function formatNumber(value: number): string {
//     const [initialInteger, decimal = "00"] = value.toFixed(2).split(".");
//     const integer = initialInteger.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//
//     return `${integer},${decimal}`;
// }
//
// export function calcTotalSum(dailyObject: DailyObjectType) {
//     let total = 0;
//     Object.entries(dailyObject).forEach(
//         ([nominal, values]: [string, string[]]) => {
//             const sum = values.reduce(
//                 (acc, value) => acc + parseFloat(value || "0"),
//                 0,
//             );
//             const nominalKey = nominal as DailyObjectNominal;
//             const totalValue = sum * coinValues[nominalKey];
//             total += totalValue;
//         },
//     );
//     return total;
// }
import { calcTotalSum, formatNumber } from "./converter";
import { expect, test, describe } from "vitest";

describe("converter utility methods", () => {
    test("format string to display dots and commas the eurpoean way", () => {
        const value = 123456.78;
        const formattedValue = formatNumber(value);
        expect(formattedValue).toBe("123.456,78");

        const value2 = 123123123123456.78;
        const formattedValue2 = formatNumber(value2);
        expect(formattedValue2).toBe("123.123.123.123.456,78");

        const value3 = 0.01;
        const formattedValue3 = formatNumber(value3);
        expect(formattedValue3).toBe("0,01");

        const value4 = 0.1;
        const formattedValue4 = formatNumber(value4);
        expect(formattedValue4).toBe("0,10");
    });

    test("check if custom sum function works properly - 6 each", () => {
        const fakeObject = {
            "200_euro": ["1", "2", "3"],
            "100_euro": ["1", "2", "3"],
            "50_euro": ["1", "2", "3"],
            "20_euro": ["1", "2", "3"],
            "10_euro": ["1", "2", "3"],
            "5_euro": ["1", "2", "3"],
            "2_euro": ["1", "2", "3"],
            "1_euro": ["1", "2", "3"],
            "50_cent": ["1", "2", "3"],
            "20_cent": ["1", "2", "3"],
            "10_cent": ["1", "2", "3"],
            "5_cent": ["1", "2", "3"],
            "2_cent": ["1", "2", "3"],
            "1_cent": ["1", "2", "3"],
        };

        const totalSum = calcTotalSum(fakeObject);

        const formattedTotalSum = formatNumber(totalSum);

        expect(formattedTotalSum).toBe("2.333,28");
    });

    test("check if custom sum function works properly - 4 each", () => {
        const fakeObject = {
            "200_euro": ["1", "3"],
            "100_euro": ["1", "3"],
            "50_euro": ["1", "3"],
            "20_euro": ["1", "3"],
            "10_euro": ["1", "3"],
            "5_euro": ["1", "3"],
            "2_euro": ["1", "3"],
            "1_euro": ["1", "3"],
            "50_cent": ["1", "3"],
            "20_cent": ["1", "3"],
            "10_cent": ["1", "3"],
            "5_cent": ["1", "3"],
            "2_cent": ["1", "3"],
            "1_cent": ["1", "3"],
        };

        const totalSum = calcTotalSum(fakeObject);

        const formattedTotalSum = formatNumber(totalSum);

        expect(formattedTotalSum).toBe("1.555,52");
    });

    test("check if custom sum function works properly - random for each", () => {
        const fakeObject = {
            "200_euro": ["1", "3", "28"],
            "100_euro": ["1", "3", " 105"],
            "50_euro": ["1", "3", "17"],
            "20_euro": ["1", "3", "87"],
            "10_euro": ["1", "3", "99"],
            "5_euro": ["1", "3", "12"],
            "2_euro": ["1", "3", "11", "12"],
            "1_euro": ["1", "3", "1", "4", "12", "22"],
            "50_cent": ["1", "3", "5"],
            "20_cent": ["1", "3", "1", "2"],
            "10_cent": ["1", "3", "98"],
            "5_cent": ["1", "3", "158"],
            "2_cent": ["1", "3", "1", "2"],
            "1_cent": ["1", "3"],
        };

        const totalSum = calcTotalSum(fakeObject);

        const formattedTotalSum = formatNumber(totalSum);

        expect(formattedTotalSum).toBe("21.401,38");
    });
});
