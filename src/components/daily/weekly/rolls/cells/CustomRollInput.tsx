import {
	WeeklyObjectNominal,
	useWeeklyStore,
} from "../../../../../stores/weekly/weeklyStore";

type CustomInputFieldProps = {
	nominal: WeeklyObjectNominal;
	index: number;
};

function CustomRollInput(props: CustomInputFieldProps) {
	const handleChange = useWeeklyStore((state) => state.handleRollChange);
	const thisValue = useWeeklyStore(
		(state) => state.rollValues[props.nominal][props.index],
	);

	return (
		<>
			<div className="m-0.5" style={{ maxWidth: "100px" }}>
				<input
					id={`${props.nominal}-${props.index}`}
					data-testid={`${props.nominal}-${props.index}`}
					className="box-border border border-black text-right "
					style={{ maxWidth: "80px" }}
					key={`${props.nominal}-${props.index}`}
					type={"number"}
					value={thisValue}
					data-tag={"5"}
					onChange={(event) => {
						console.log(event.target.value);
						handleChange(
							event.target.value,
							props.index,
							props.nominal,
						);
					}}
				/>
			</div>
		</>
	);
}

export { CustomRollInput };