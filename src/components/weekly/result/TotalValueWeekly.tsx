import { useDailyStore } from "../../../stores/daily/dailyStore";
import { useWeeklyStore } from "../../../stores/weekly/weeklyStore";
import {
	calculateTotalBoxValue,
	calculateTotalRollValue,
} from "../../../utils/calculate";
import { calcTotalSum, formatNumber } from "../../../utils/converter";
import { ValidationIndicator } from "../../daily/bottom/result/ValidationIndicator";

function TotalValueWeekly() {
	const setNewTotalResult = useWeeklyStore((state) => state.setTotalResult);
	const rollsObject = useWeeklyStore((state) => state.rollValues);
	const boxesObject = useWeeklyStore((state) => state.boxValues);
	const dailyObject = useDailyStore((state) => state.dailyValues);

	const totalDailyObject = calcTotalSum(dailyObject);
	const totalBoxesObject = calculateTotalBoxValue(boxesObject);
	const totalRollsObject = calculateTotalRollValue(rollsObject);

	const total = totalDailyObject + totalBoxesObject + totalRollsObject;

	setNewTotalResult(total);

	const formattedTotal = formatNumber(total);
	const apiTotalValue = useDailyStore(
		(state) => state.fetchedData.apiTotalValue,
	);

	return (
		<>
			<div className="mb-2 flex justify-between bg-red-200">
				<div className="mr-5">total</div>
				<div className="flex">
					<div data-testid="totalDisplayDiv" className="text-right">
						{formattedTotal} €
					</div>
					<ValidationIndicator
						currentValue={total.toFixed(2)}
						targetValue={apiTotalValue}
					/>
				</div>
			</div>
		</>
	);
}

export { TotalValueWeekly };
