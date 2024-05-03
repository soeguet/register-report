import { useEffect } from "react";
import { fetchWithDebounce } from "../../../../hooks/validationHook";
import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { calcTotalSum, formatNumber } from "../../../../utils/converter";
import { ValidationIndicator } from "../../bottom/result/ValidationIndicator";

function DiffValueWeekly() {
    const target = useDailyStore((state) => state.targetValue);
    const dailyValues = useDailyStore((state) => state.dailyValues);
    const totalValue = calcTotalSum(dailyValues);
    const diff = totalValue - target;
    const formattedDiff = formatNumber(diff) || "0";
    const apiDiffValue = useDailyStore(
        (state) => state.fetchedData.apiDiffValue,
    );

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
    }, [dailyValues, target]);

    return (
        <>
            <div className="flex justify-between bg-gray-300">
                <div className="mr-5">diff</div>
                <div className="flex">
                    <div
                        data-testid="diffDisplayDiv"
                        className={`${diffBgColor()} text-right`}
                    >
                        {formattedDiff} €
                    </div>
                    <ValidationIndicator
                        targetValue={apiDiffValue}
                        currentValue={diff.toFixed(2)}
                    />
                </div>
            </div>
        </>
    );
}

export { DiffValueWeekly };