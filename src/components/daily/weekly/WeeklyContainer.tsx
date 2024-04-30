import { useWeeklyStore } from "../../../stores/weekly/weeklyStore";
import { ExtraMoneyBoxes } from "./boxes/ExtraMoneyBoxes";
import { ExtraMoneyRolls } from "./rolls/ExtraMoneyRolls";

function WeeklyContainer() {
	const isWeeklySelected = useWeeklyStore((state) => state.isSelected);
	return (
		<>
			{isWeeklySelected && (
				<div className=" flex w-96 flex-col border border-red-500">
					<div className="mr-2">
						<ExtraMoneyRolls />
						<ExtraMoneyBoxes />
					</div>
				</div>
			)}
		</>
	);
}

export { WeeklyContainer };
