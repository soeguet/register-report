import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { useWeeklyStore } from "../../../../stores/weekly/weeklyStore";
import { calcTotalSum, formatNumber } from "../../../../utils/converter";
import { ValidationIndicator } from "../../bottom/result/ValidationIndicator";

function TotalValueWeekly() {
    const rollsObject = useWeeklyStore((state) => state.rollValues);
    const boxesObject = useWeeklyStore((state) => state.boxValues);
    const dailyObject = useDailyStore((state) => state.dailyValues);

    const totalDailyValue = calcTotalSum(dailyObject);

    const total = calcTotalSum(dailyObject);
    const formattedTotal = formatNumber(total);
    const apiTotalValue = useDailyStore(
        (state) => state.fetchedData.apiTotalValue,
    );

    return (
        <>
            <div className="mb-2 flex justify-between bg-red-200">
                <div className="mr-5">total</div>
                <div className="flex">
                    <div data-testid="totalDisplayDiv" className="text-right">
                        {totalDailyValue} €
                    </div>
                    <ValidationIndicator
                        currentValue={total.toFixed(2)}
                        targetValue={apiTotalValue}
                    />
                </div>
            </div>
        </>
    );
}

export { TotalValueWeekly };
