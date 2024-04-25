import { useWeeklyStore } from "../../../stores/weekly/weeklyStore";

function WeeklyCheckbox() {
    return (
        <>
            <label className="content-center px-5">
                <input
                    type="checkbox"
                    onChange={(event) => {
                        useWeeklyStore
                            .getState()
                            .setSelected(event.target.checked);
                    }}
                />{" "}
                weekly
            </label>
        </>
    );
}

export { WeeklyCheckbox };
