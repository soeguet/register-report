import { useEffect } from "react";
import { fetchWithDebounce } from "../../../hooks/validationHook";
import { useDailyStore } from "../../../stores/daily/dailyStore";
import { calcTotalSum, formatNumber } from "../../../utils/converter";
import { ValidationIndicator } from "../../daily/bottom/result/ValidationIndicator";
import { useWeeklyStore } from "../../../stores/weekly/weeklyStore";
import { calculateTotalBoxValue, calculateTotalRollValue } from "../../../utils/calculate";

function DiffValueWeekly() {

    const rollsObject = useWeeklyStore((state) => state.rollValues);
    const boxesObject = useWeeklyStore((state) => state.boxValues);
    const dailyObject = useDailyStore((state) => state.dailyValues);

    const totalDailyObject = calcTotalSum(dailyObject);
    const totalBoxesObject = calculateTotalBoxValue(boxesObject);
    const totalRollsObject = calculateTotalRollValue(rollsObject);

    const totalResult = totalDailyObject + totalBoxesObject + totalRollsObject;

    const target = useDailyStore((state) => state.targetValue);
    const diff = totalResult - target;
    const formattedDiff = formatNumber(diff) || "0";
    const apiDiffValue = useDailyStore(
        (state) => state.fetchedData);

    const diffBgColor = () => {
        if (Math.floor(diff) === 0) {
            return "bg-green-200";
        } else if (diff < 0) {
            return "bg-red-200";
        } else {
            return "bg-blue-200";
        }
    };
    useEffect(() => {
        useDailyStore.getState().setIsFetchingData(true);
        fetchWithDebounce();
    }, [totalResult, target]);

    return (
        <>
            <div className="flex justify-between">
                <div className="mr-5">diff</div>
                <div className="flex">
                    <div
                        data-testid="diffDisplayDiv"
                        className={`${diffBgColor()} text-right`}
                    >
                        {formattedDiff} €
                    </div>
                    <ValidationIndicator
                        targetValue={apiDiffValue.apiTotalValue}
                        currentValue={diff.toFixed(2)}
                    />
                </div>
            </div>
        </>
    );
}

export { DiffValueWeekly };
