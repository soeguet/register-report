import { coinValues } from "./customTypes";

export function formatNumber(value: number): string {
    let [integer, decimal = "00"] = value.toFixed(2).split(".");

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${integer},${decimal}`;
}

export function calcTotalSum(dailyObject) {
    let total = 0;
    Object.entries(dailyObject).forEach(([nominal, values]) => {
        const sum = values.reduce(
            (acc, value) => acc + parseFloat(value || 0),
            0,
        );
        const totalValue = sum * coinValues[nominal];
        total += totalValue;
    });
    return total;
}
