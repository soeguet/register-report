import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { formatNumber } from "../../../../utils/converter";
import { Checkmark } from "../../../../utils/svg/Checkmark";
import { LoadingSvg } from "../../../../utils/svg/LoadingSvg";

function TargetValue() {
    const targetValue = useDailyStore((state) => state.targetValue);
    const isFetchingData = useDailyStore((state) => state.isFetchingData);
    return (
        <>
            <div className="flex justify-between mb-2">
                <div className="mr-5">target</div>
                <div className="flex">
                    <div data-testid="targetDisplayDiv" className="text-right">
                        {formatNumber(targetValue)} €
                    </div>

                    <div className="ml-3">
                        {isFetchingData ? <LoadingSvg /> : <Checkmark />}
                    </div>
                </div>
            </div>
        </>
    );
}

export { TargetValue };
