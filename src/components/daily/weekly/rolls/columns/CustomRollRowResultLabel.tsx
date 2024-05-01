import {
	WeeklyObjectNominal,
	useWeeklyStore,
} from "../../../../../stores/weekly/weeklyStore";
import { formatNumber } from "../../../../../utils/converter.ts";
import { coinValues } from "../../../../../utils/customTypes.ts";

type CustomRollRowResultLabelProps = {
	nominal: WeeklyObjectNominal;
	coinsPerRoll: number;
};

function CustomRollRowResultLabel(props: CustomRollRowResultLabelProps) {
	const totalAmount = useWeeklyStore(
		(state) => state.rollValues[props.nominal],
	);
	const sumAmount = totalAmount.reduce((acc, curr) => acc + curr, 0);
	const factor = coinValues[props.nominal];
	const sumTotal = sumAmount * props.coinsPerRoll * factor;
	const sumTotalValueFormatted = formatNumber(sumTotal);

	return (
		<>
			<div className="mx-2 my-0.5 border border-transparent text-right">
				{sumTotalValueFormatted} €
			</div>
		</>
	);
}

export { CustomRollRowResultLabel };