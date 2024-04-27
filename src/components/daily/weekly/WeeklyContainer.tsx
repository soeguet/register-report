import { useWeeklyStore } from "../../../stores/weekly/weeklyStore";
import { ExtraMoneyRolls } from "./ExtraMoneyRolls";

function WeeklyContainer() {
    const isWeeklySelected = useWeeklyStore((state) => state.isSelected);
    return (
        <>
            {isWeeklySelected && (
                <div className="flex border border-red-500 bg-red-200">
                    <ExtraMoneyRolls />
                    {/* <ExtraMoneyBoxes /> */}
                </div>
            )}
        </>
    );
}

export { WeeklyContainer };
