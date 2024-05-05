import { useDailyStore } from "../../../../stores/daily/dailyStore";

function ResetButton() {
    return (
        <>
            <button
                type="button"
                className="relative -ml-px inline-flex items-center bg-gray-200 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                onClick={() => {
                    useDailyStore.getState().resetValues();
                }}
            >
                reset values
            </button>
        </>
    );
}

export { ResetButton };
