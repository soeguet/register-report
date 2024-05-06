import { useDailyStore } from "../../../../stores/daily/dailyStore";
import { useWeeklyStore } from "../../../../stores/weekly/weeklyStore";

function ResetButton() {
    return (
        <>
            <button
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                onClick={() => {
                    useDailyStore.getState().resetValues();
					useWeeklyStore.getState().resetValues();
                }}
            >
                reset values
            </button>
        </>
    );
}

export { ResetButton };
