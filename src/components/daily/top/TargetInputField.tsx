import { useDailyStore } from "../../../stores/daily/dailyStore";

function TargetInputField() {
    const targetValue = useDailyStore((state) => state.targetValue);
    const setTargetValue = useDailyStore((state) => state.setTargetValue);

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value === "") {
            setTargetValue(0);
            return;
        }
        const allGood = inputFieldValidation(event);

        if (allGood) {
            const value = parseFloat(event.target.value);
            setTargetValue(value);
        }
    }

    function inputFieldValidation(event: React.ChangeEvent<HTMLInputElement>) {
        const regex = /^\d+(\.\d{0,2})?$/;
        return regex.test(event.target.value);
    }
    return (
        <>
            <div className="flex">
                <span className="m-auto ml-6 font-extralight"> || </span>
                <label htmlFor="targetValueInput" className="ml-6 my-auto">
                    target value:
                </label>
                <input
                    data-testid="targetValueInput"
                    name="targetValueInput"
                    id="targetValueInput"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={targetValue || ""}
                    onChange={onChangeHandler}
                    className={"ml-3 border text-center my-auto"}
                />
                <span className="my-auto ml-1">€</span>
            </div>
        </>
    );
}

export { TargetInputField };
