import {
	WeeklyObjectNominal,
	useWeeklyStore,
} from "../../../../stores/weekly/weeklyStore";

type CustomBoxRowTotalLabelProps = {
	nominal: WeeklyObjectNominal;
	rollsPerBox: number;
	coinsPerRoll: number;
};

function CustomBoxRowAmountLabel(props: CustomBoxRowTotalLabelProps) {
	const totalAmount = useWeeklyStore(
		(state) => state.boxValues[props.nominal],
	);
	const sumAmount = totalAmount.reduce((acc, curr) => acc + curr, 0);
	const sumTotalAmount = sumAmount * props.rollsPerBox * props.coinsPerRoll;

	return (
		<>
			<div className="flex">
				<div className="shrink content-center text-center text-xs text-red-400">
					{props.coinsPerRoll}x {props.rollsPerBox}x
				</div>
				<div className="mx-2 my-0.5 border border-transparent text-right">
					{sumTotalAmount} x
				</div>
			</div>
		</>
	);
}

export { CustomBoxRowAmountLabel };
