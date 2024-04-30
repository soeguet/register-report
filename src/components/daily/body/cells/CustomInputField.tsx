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
			<div className="m-2">
				<input
					id={`${props.nominal}-${props.index}`}
					data-testid={`${props.nominal}-${props.index}`}
					className="box-border w-full border border-black text-right "
					key={`${props.nominal}-${props.index}`}
					type={"number"}
					value={thisValue}
					data-tag={"5"}
					onChange={(event) =>
						handleChange(
							props.nominal,
							props.index,
							event.target.value,
						)
					}
				/>
			</div>
			{props.nominal === "5_euro" && (
				<div className="overflow-hidden text-center font-extralight">
					---------------------------------------------------
				</div>
			)}
		</>
	);
}

export { CustomInputField };
