import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { calcTotalSum, formatNumber } from "../../../../utils/converter";
import { Checkmark } from "../../../../utils/svg/Checkmark";
import { LoadingSvg } from "../../../../utils/svg/LoadingSvg";

function TotalValue() {
    const dailyObject = useDailyStore((state) => state.dailyValues);
    const total = calcTotalSum(dailyObject);
    const formattedTotal = formatNumber(total);
    const isFetchingData = useDailyStore((state) => state.isFetchingData);

    return (
        <>
            <div className="flex justify-between mb-2">
                <div className="mr-5">total</div>
                <div className="flex">
                    <div data-testid="totalDisplayDiv" className="text-right">
                        {formattedTotal} €
                    </div>
                    <div className="ml-3">
                        {isFetchingData ? <LoadingSvg /> : <Checkmark />}
                    </div>
                </div>
            </div>
        </>
    );
}

export { TotalValue };
