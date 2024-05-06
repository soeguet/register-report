import {
    WeeklyObjectNominal,
    useWeeklyStore,
} from "../../../../stores/weekly/weeklyStore";
import { determineBoxFactor } from "../../../../utils/boxFactor";
import { formatNumber } from "../../../../utils/converter";
import { coinValues } from "../../../../utils/customTypes";

type CustomBoxRowTotalLabelProps = {
	nominal: WeeklyObjectNominal;
	coinsPerRoll: number;
};

export function calculateValueOfAllBoxCoins(
	nominal: WeeklyObjectNominal,
	values: number[],
	rollsPerBox: number,
	coinsPerRoll: number,
) {
	const sum = values.reduce((acc, value) => acc + value, 0);
	const coinValue = coinValues[nominal];
	const totalValue = sum * coinValue * rollsPerBox * coinsPerRoll;
	return totalValue;
}

function CustomBoxRowTotalLabel(props: CustomBoxRowTotalLabelProps) {
	const totalAmount = useWeeklyStore(
		(state) => state.boxValues[props.nominal],
	);
	const label = coinValues[props.nominal];
	const sumAmount = totalAmount.reduce((acc, curr) => acc + curr, 0);
	const rollsPerBox = determineBoxFactor(props.nominal);

	const totalValue = label * rollsPerBox * props.coinsPerRoll * sumAmount;
	const totalValueString = formatNumber(totalValue);

	return (
		<>
			<div className="mx-2 my-0.5 w-32 border-2 border-transparent text-right">
				{totalValueString} €
			</div>
		</>
	);
}

export { CustomBoxRowTotalLabel };
