import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { calcTotalSum, formatNumber } from "../../../../utils/converter";
import { ValidationIndicator } from "./ValidationIndicator";

function TotalValue() {
    const dailyObject = useDailyStore((state) => state.dailyValues);
    const total = calcTotalSum(dailyObject);
    const formattedTotal = formatNumber(total);
	const target = useDailyStore((state) => state.targetValue);

    return (
        <>
            <div className="flex justify-between mb-2">
                <div className="mr-5">total</div>
                <div className="flex">
                    <div data-testid="totalDisplayDiv" className="text-right">
                        {formattedTotal} €
                    </div>
                    <ValidationIndicator currentValue={total.toFixed(2)} targetValue={target.toFixed(2)}/>
                </div>
            </div>
        </>
    );
}

export { TotalValue };
