import {
	WeeklyObjectNominal,
	useWeeklyStore,
} from "../../../../stores/weekly/weeklyStore";
import { coinValues } from "../../../../utils/customTypes";

type CustomBoxRowTotalLabelProps = {
	nominal: WeeklyObjectNominal;
	rollsPerBox: number;
	coinsPerRoll: number;
};

function CustomBoxRowTotalLabel(props: CustomBoxRowTotalLabelProps) {
	const totalAmount = useWeeklyStore(
		(state) => state.boxValues[props.nominal],
	);
	const label = coinValues[props.nominal];
	const sumAmount = totalAmount.reduce((acc, curr) => acc + curr, 0);

	const totalValue = label * props.rollsPerBox *props.coinsPerRoll * sumAmount;
	const totalValueString = totalValue.toFixed(2);

	return (
		<>
			<div className="mx-2 my-0.5 border border-transparent text-right">{totalValueString} €</div>
		</>
	);
}

export { CustomBoxRowTotalLabel };
