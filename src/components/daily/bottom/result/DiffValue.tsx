import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { calcTotalSum, formatNumber } from "../../../../utils/converter";

function DiffValue() {
    const target = useDailyStore((state) => state.targetValue);
    const dailyValues = useDailyStore((state) => state.dailyValues);
    const totalValue = calcTotalSum(dailyValues);
    const diff = totalValue - target;
    const formattedDiff = formatNumber(diff) || "0";

    const diffBgColor = () => {
        if (Math.floor(diff) === 0) {
            return "bg-green-200";
        } else if (diff < 0) {
            return "bg-red-200";
        } else {
            return "bg-blue-200";
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <div className="mr-5">diff</div>
                <div
					data-testid="diffDisplayDiv"
					className={`${diffBgColor()} text-right`}>
                    {formattedDiff} €
                </div>
            </div>
        </>
    );
}

export { DiffValue };
