import {
    WeeklyObjectNominal,
    useWeeklyStore,
} from "../../../../stores/weekly/weeklyStore";

type CustomInputFieldProps = {
    nominal: WeeklyObjectNominal;
    index: number;
};

function CustomBoxInput(props: CustomInputFieldProps) {
    const handleChange = useWeeklyStore((state) => state.handleBoxChange);
    const thisValue = useWeeklyStore(
        (state) => state.boxValues[props.nominal][props.index],
    );

    return (
        <>
            <div className="m-0.5 " style={{ maxWidth: "100px" }}>
                <input
                    id={`weekly-boxes-${props.nominal}-${props.index}`}
                    data-testid={`${props.nominal}-${props.index}`}
                    className="box-border w-full border-2 border-black text-right transition-all duration-500 ease-in-out focus:rounded-l focus:bg-blue-200 focus:outline-none"
                    key={`${props.nominal}-${props.index}`}
                    type={"number"}
                    value={thisValue}
                    data-tag={"5"}
                    onChange={(event) =>
                        handleChange(event.target.value, props.nominal)
                    }
                />
            </div>
        </>
    );
}

export { CustomBoxInput };
