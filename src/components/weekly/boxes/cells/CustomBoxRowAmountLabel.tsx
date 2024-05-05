import {
	WeeklyObjectNominal,
	useWeeklyStore,
} from "../../../../stores/weekly/weeklyStore";
import { determineBoxFactor } from "../../../../utils/boxFactor";

type CustomBoxRowTotalLabelProps = {
	nominal: WeeklyObjectNominal;
	coinsPerRoll: number;
};

function CustomBoxRowAmountLabel(props: CustomBoxRowTotalLabelProps) {
	const totalAmount = useWeeklyStore(
		(state) => state.boxValues[props.nominal],
	);
	const sumAmount = totalAmount.reduce((acc, curr) => acc + curr, 0);
	const rollsPerBox = determineBoxFactor(props.nominal);
	const sumTotalAmount = sumAmount * rollsPerBox * props.coinsPerRoll;

	return (
		<>
			<div className="flex justify-between gap-2">
				<div className="shrink content-center text-xs text-gray-500">
					{props.coinsPerRoll}x {rollsPerBox}x
				</div>
				<div className="mx-2 my-0.5 border-2 border-transparent text-right">
					{sumTotalAmount} x
				</div>
			</div>
		</>
	);
}

export { CustomBoxRowAmountLabel };
