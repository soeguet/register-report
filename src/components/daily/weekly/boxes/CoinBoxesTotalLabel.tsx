import {
    WeeklyObjectNominal,
    useWeeklyStore,
} from "../../../../stores/weekly/weeklyStore";
import { coinValues } from "../../../../utils/customTypes";
import { determineBoxFactor } from "../../../../utils/boxFactor";
import { determineRollFactor } from "../../../../utils/rollFactor";
import { formatNumber } from "../../../../utils/converter";

function CoinBoxesTotalLabel() {
    const boxValues = useWeeklyStore((state) => state.boxValues);
	const calculatedValueAsString = formatNumber(calculateTotalBoxValue());

    function calculateTotalBoxValue() {
        let total = 0;
        Object.entries(boxValues).forEach(
            ([nominal, values]: [string, number[]]) => {
                const sum = values.reduce((acc, value) => acc + value, 0);
                const nominalKey = nominal as WeeklyObjectNominal;
                const boxFactor = determineBoxFactor(nominalKey);
                const rollFactor = determineRollFactor(nominalKey);
                const coinValue = coinValues[nominalKey];
                const totalValue = sum * coinValue * boxFactor * rollFactor;
                total += totalValue;
            },
        );
        return total;
    }

    return (
        <>
            <div className="flex">
                <span className=" ml-auto mr-4 bg-orange-100 text-right">
                    = {calculatedValueAsString} €
                </span>
            </div>
        </>
    );
}

export { CoinBoxesTotalLabel };
