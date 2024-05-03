import { getCurrentDateTime } from "./time";
import { expect, test, describe } from "vitest";


describe("time function", () => {
    test("check if time string in right format", () => {
        const timeString = getCurrentDateTime();
        const regex = new RegExp(/\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}/);
        expect(regex.test(timeString)).toBe(true);
    });

    test("flakey test - check if time string corret information", () => {
        const timeString = getCurrentDateTime();
        const now = new Date();

        const regexHours = new RegExp(now.getHours().toString());
        expect(regexHours.test(timeString)).toBe(true);

        const regexMinutes = new RegExp(now.getMinutes().toString());
        expect(regexMinutes.test(timeString)).toBe(true);

        const regexSeconds = new RegExp(now.getSeconds().toString());
        expect(regexSeconds.test(timeString)).toBe(true);

        const regexMonth = new RegExp(now.getMonth().toString());
        expect(regexMonth.test(timeString)).toBe(true);

        const regexDay = new RegExp(now.getDay().toString());
        expect(regexDay.test(timeString)).toBe(true);
    });
});
