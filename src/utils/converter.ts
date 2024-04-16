import {
    DailyObjectNominal,
    DailyObjectType,
} from "../stores/daily/dailyStore";
import { coinValues } from "./customTypes";

export function formatNumber(value: number): string {
    const [initialInteger, decimal = "00"] = value.toFixed(2).split(".");
    const integer = initialInteger.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${integer},${decimal}`;
}

export function calcTotalSum(dailyObject: DailyObjectType) {
    let total = 0;
    Object.entries(dailyObject).forEach(
        ([nominal, values]: [string, string[]]) => {
            const sum = values.reduce(
                (acc, value) => acc + parseFloat(value || "0"),
                0,
            );
            const nominalKey = nominal as DailyObjectNominal;
            const totalValue = sum * coinValues[nominalKey];
            total += totalValue;
        },
    );
    return total;
}
