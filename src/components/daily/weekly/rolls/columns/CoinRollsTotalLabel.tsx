import {
	useWeeklyStore,
	WeeklyObjectNominal,
} from "../../../../../stores/weekly/weeklyStore.ts";
import { formatNumber } from "../../../../../utils/converter.ts";
import { coinValues } from "../../../../../utils/customTypes.ts";
import { determineRollFactor } from "../../../../../utils/rollFactor.ts";

function CoinRollsTotalLabel() {
	const rollValues = useWeeklyStore((state) => state.rollValues);
	const calculatedValueAsString = formatNumber(calculateTotalRollValue());

	function calculateTotalRollValue() {
		let total = 0;
		Object.entries(rollValues).forEach(
			([nominal, values]: [string, number[]]) => {
				const sum = values.reduce((acc, value) => acc + value, 0);
				const nominalKey = nominal as WeeklyObjectNominal;
				const rollFactor = determineRollFactor(nominalKey);
				const coinValue = coinValues[nominalKey];
				const totalValue = sum * coinValue * rollFactor;
				total += totalValue;
			},
		);
		return total;
	}
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