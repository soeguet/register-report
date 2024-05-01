import {
	WeeklyObjectNominal,
	useWeeklyStore,
} from "../../../../../stores/weekly/weeklyStore";

type CustomRollRowAmountLabelProps = {
	nominal: WeeklyObjectNominal;
	coinsPerRoll: number;
};

function CustomRollRowAmountLabel(props: CustomRollRowAmountLabelProps) {
	const totalAmount = useWeeklyStore(
		(state) => state.rollValues[props.nominal],
	);
	const sumAmount = totalAmount.reduce((acc, curr) => acc + curr, 0);
	const sumTotalAmount = sumAmount * props.coinsPerRoll;

	return (
		<>
			<div className="flex justify-between">

                <div className="shrink content-center text-xs text-gray-500">
                    {props.coinsPerRoll}x
                </div>
				<div className="mx-2 my-0.5 border-2 border-transparent text-right">

					{sumTotalAmount} x
				</div>
			</div>
		</>
	);
}

export { CustomRollRowAmountLabel };
