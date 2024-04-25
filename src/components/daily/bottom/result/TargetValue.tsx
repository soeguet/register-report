import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { formatNumber } from "../../../../utils/converter";
import { ValidationIndicator } from "./ValidationIndicator";

function TargetValue() {
    const targetValue = useDailyStore((state) => state.targetValue);
    return (
        <>
            <div className="flex justify-between mb-2">
                <div className="mr-5">target</div>
                <div className="flex">
                    <div data-testid="targetDisplayDiv" className="text-right">
                        {formatNumber(targetValue)} €
                    </div>

                    <ValidationIndicator targetValue={targetValue.toFixed(2)} currentValue={targetValue.toFixed(2)} />
                </div>
            </div>
        </>
    );
}

export { TargetValue };
