import { WeeklyObjectNominal, WeeklyObjectType } from "../stores/weekly/weeklyStore";
import { determineBoxFactor } from "./boxFactor";
import { coinAmounts, coinValues } from "./customTypes";

/**
 * takes the nominal, the roll factor and the values of the coins and calculates the total value of all coins in the given rolls for the given rolls
 * @param nominal the nominal of the coins
 * @param inputValuesAsArray the values of the coins
 * @returns the total value of all coins in the given rolls
 */
export function calculateValueOfAllCoins(
    nominal: WeeklyObjectNominal,
    inputValuesAsArray: number[],
): number {
    const amountOfTotalCoins = inputValuesAsArray.reduce((acc, value) => acc + value, 0);
    const coinsPerRoll = coinAmounts[nominal];
    const valueOfCoins = coinValues[nominal];
    const totalValue = amountOfTotalCoins * valueOfCoins * coinsPerRoll;
    return totalValue;
}

/**
* calculates the total value of all coins in the given rolls
* @param rollValues the values of the coins
* @returns the total value of all coins in the given rolls
*/
export function calculateTotalRollValue(rollValues: WeeklyObjectType): number {
    let total = 0;
    Object.entries(rollValues).forEach(
        ([nominal, values]: [string, number[]]) => {
            const sum = values.reduce((acc, value) => acc + value, 0);
            const nominalKey = nominal as WeeklyObjectNominal;
            const rollFactor = coinAmounts[nominalKey];
            const coinValue = coinValues[nominalKey];
            const totalValue = sum * coinValue * rollFactor;
            total += totalValue;
        },
    );
    return total;
}

/**
* calculates the total value of all coins in the given rolls
* @param boxValues the values of the coins
* @returns the total value of all coins in the given rolls
*/
export function calculateTotalBoxValue(boxValues: WeeklyObjectType):number {
    let total = 0;
    Object.entries(boxValues).forEach(
        ([nominal, values]: [string, number[]]) => {
            const sum = values.reduce((acc, value) => acc + value, 0);
            const nominalKey = nominal as WeeklyObjectNominal;
            const boxFactor = determineBoxFactor(nominalKey);
            const rollFactor = coinAmounts[nominalKey];
            const coinValue = coinValues[nominalKey];
            const totalValue = sum * coinValue * boxFactor * rollFactor;

            total += totalValue;
        },
    );
    return total;
}

