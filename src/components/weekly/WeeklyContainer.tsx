import { useWeeklyStore } from "../../stores/weekly/weeklyStore";
import { ExtraMoneyBoxes } from "./boxes/ExtraMoneyBoxes";
import { ExtraMoneyRolls } from "./rolls/ExtraMoneyRolls";

function WeeklyContainer() {
	const isWeeklySelected = useWeeklyStore((state) => state.isSelected);
	return (
		<>
			{isWeeklySelected && (
				<div className="flex flex-col justify-center gap-5 text-nowrap p-3">
					<ExtraMoneyRolls />
					<ExtraMoneyBoxes />
				</div>
			)}
		</>
	);
}

export { WeeklyContainer };
