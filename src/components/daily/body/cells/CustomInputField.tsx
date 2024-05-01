import {
	DailyObjectNominal,
	useDailyStore,
} from "../../../../stores/daily/dailyStore.ts";

type CustomInputFieldProps = {
	nominal: DailyObjectNominal;
	index: number;
};

function CustomInputField(props: CustomInputFieldProps) {
	const handleChange = useDailyStore((state) => state.handleChange);
	const thisValue = useDailyStore(
		(state) => state.dailyValues[props.nominal][props.index],
	);

	return (
		<>
			<div className="m-0.5">
				<input
					id={`${props.nominal}-${props.index}`}
					data-testid={`${props.nominal}-${props.index}`}
					className="box-border border-2 border-black text-right transition-all duration-300 ease-in-out focus:border-2 focus:border-red-500 focus:outline-none"
					key={`${props.nominal}-${props.index}`}
					type={"number"}
					value={thisValue}
					data-tag={"5"}
					style={{ width: "80px" }}
					onChange={(event) =>
						handleChange(
							props.nominal,
							props.index,
							event.target.value,
						)
					}
				/>
			</div>
			{props.nominal === "5_euro" && <div className="py-2 "></div>}
		</>
	);
}

export { CustomInputField };