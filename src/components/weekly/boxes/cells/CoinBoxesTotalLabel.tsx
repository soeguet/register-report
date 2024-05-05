import {
    useWeeklyStore,
} from "../../../../stores/weekly/weeklyStore";
import { formatNumber } from "../../../../utils/converter";
import { calculateTotalBoxValue } from "../../../../utils/calculate";

function CoinBoxesTotalLabel() {
    const boxValues = useWeeklyStore((state) => state.boxValues);
	const calculatedValueAsString = formatNumber(calculateTotalBoxValue(boxValues));

    return (
        <>
            <div className="flex">
                <span className=" ml-auto mr-4 bg-orange-100 text-right">
                    = {calculatedValueAsString} €
                </span>
            </div>
        </>
    );
}

export { CoinBoxesTotalLabel };
