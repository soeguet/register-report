import { useWeeklyStore } from "../../../stores/weekly/weeklyStore";
import { ExtraMoneyBoxes } from "./ExtraMoneyBoxes";
import { ExtraMoneyRolls } from "./ExtraMoneyRolls";

function WeeklyContainer() {
    const isWeeklySelected = useWeeklyStore((state) => state.isSelected);
    return (
        <>
            {isWeeklySelected && (
                <div className="flex bg-red-200 border border-red-500">
                    <ExtraMoneyRolls />
                    <ExtraMoneyBoxes />
                </div>
            )}
        </>
    );
}

export { WeeklyContainer };
