import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { Checkmark } from "../../../../utils/svg/Checkmark";
import { LoadingSvg } from "../../../../utils/svg/LoadingSvg";

function ValidationIndicator() {
    const isFetchingData = useDailyStore((state) => state.isFetchingData);
    return (
        <>
            <div className="ml-3">
                {isFetchingData ? <LoadingSvg /> : <Checkmark />}
            </div>
        </>
    );
}

export { ValidationIndicator };
