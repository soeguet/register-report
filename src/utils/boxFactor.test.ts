import { determineBoxFactor } from "./boxFactor";
import { expect, test, describe } from "vitest";

describe("boxFactor", () => {

    test('should return 3 for 2_euro', () => {
        expect(determineBoxFactor("2_euro")).toBe(3);
    });

    test('should return 3 for 1_euro', () => {

        expect(determineBoxFactor("1_euro")).toBe(3);
    });

    test('should return 3 for 50_cent', () => {

        expect(determineBoxFactor("50_cent")).toBe(3);
    });

    test('should return 3 for 20_cent', () => {

        expect(determineBoxFactor("20_cent")).toBe(3);
    });

    test('should return 3 for 10_cent', () => {

        expect(determineBoxFactor("10_cent")).toBe(3);
    });

    test('should return 3 for 5_cent', () => {

        expect(determineBoxFactor("5_cent")).toBe(3);
    });

    test('should return 5 for 2_cent', () => {

        expect(determineBoxFactor("2_cent")).toBe(5);
    });

    test('should return 5 for 1_cent', () => {

        expect(determineBoxFactor("1_cent")).toBe(5);
    });
});
