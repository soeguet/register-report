import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { formatNumber } from "../../../../utils/converter";

function TargetValue() {
    const targetValue = useDailyStore((state) => state.targetValue);
    return (
        <>
            <div className="flex justify-between mb-2">
                <div className="mr-5">target</div>
                <div className="text-right">{formatNumber(targetValue)} €</div>
            </div>
        </>
    );
}

export { TargetValue };
