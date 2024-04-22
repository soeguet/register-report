import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { calcTotalSum, formatNumber } from "../../../../utils/converter";

function TotalValue() {
    const dailyObject = useDailyStore((state) => state.dailyValues);
    const total = calcTotalSum(dailyObject);
    const formattedTotal = formatNumber(total);

    return (
        <>
            <div className="flex justify-between mb-2">
                <div className="mr-5">total</div>
                <div data-testid="totalDisplayDiv" className="text-right">
                    {formattedTotal} €
                </div>
            </div>
        </>
    );
}

export { TotalValue };
