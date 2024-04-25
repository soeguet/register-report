import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { Checkmark } from "../../../../utils/svg/Checkmark";
import { LoadingSvg } from "../../../../utils/svg/LoadingSvg";

type ValidationIndicatorProps = {
    targetValue: string;
    currentValue: string;
};

function ValidationIndicator(props: ValidationIndicatorProps) {
    const isFetchingData = useDailyStore((state) => state.isFetchingData);

    if (isFetchingData) {
        return (
            <>
                <div className="ml-3">
                    <LoadingSvg />
                </div>
            </>
        );
    }

    return (
        <>
            <div className="ml-3">
                {props.targetValue === props.currentValue ? (
                    <Checkmark />
                ) : (
                    "ERROR"
                )}
            </div>
        </>
    );
}

export { ValidationIndicator };
