import {
    WeeklyObjectNominal,
    useWeeklyStore,
} from "../../../../../stores/weekly/weeklyStore";
import { coinValues } from "../../../../../utils/customTypes";

type CustomBoxRowTotalLabelProps = {
    nominal: WeeklyObjectNominal;
    rollsPerBox: number;
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

    const totalValue =
        label * props.rollsPerBox * props.coinsPerRoll * sumAmount;
    const totalValueString = totalValue.toFixed(2);

    return (
        <>
            <div className="mx-2 my-0.5 border-2 border-transparent text-right">
                {totalValueString} €
            </div>
        </>
    );
}

export { CustomBoxRowTotalLabel };