import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { calcTotalSum, formatNumber } from "../../../../utils/converter";
import { ValidationIndicator } from "../../bottom/result/ValidationIndicator";

function TotalValueWeekly() {
    const dailyObject = useDailyStore((state) => state.dailyValues);
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
                        {formattedTotal} €
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
