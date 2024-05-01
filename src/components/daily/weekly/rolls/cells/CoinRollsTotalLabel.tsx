import {
    useWeeklyStore,
} from "../../../../../stores/weekly/weeklyStore.ts";
import { formatNumber } from "../../../../../utils/converter.ts";



function CoinRollsTotalLabel() {
	const rollValues = useWeeklyStore((state) => state.rollValues);
	const calculatedValueAsString = formatNumber(calculateTotalRollValue(rollValues));
	

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

export { CoinRollsTotalLabel };


