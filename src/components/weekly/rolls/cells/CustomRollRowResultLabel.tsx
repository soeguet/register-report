import {
    WeeklyObjectNominal,
    useWeeklyStore,
} from "../../../../stores/weekly/weeklyStore.ts";
import { calculateValueOfAllCoins } from "../../../../utils/calculate.ts";
import { formatNumber } from "../../../../utils/converter.ts";

type CustomRollRowResultLabelProps = {
    nominal: WeeklyObjectNominal;
    coinsPerRoll: number;
};

function CustomRollRowResultLabel(props: CustomRollRowResultLabelProps) {
    const totalAmount = useWeeklyStore(
        (state) => state.rollValues[props.nominal],
    );
    const sumTotal = calculateValueOfAllCoins(
        props.nominal,
        totalAmount,
    );
    const sumTotalValueFormatted = formatNumber(sumTotal);

    return (
        <>
            <div className="mx-2 my-0.5 w-28 border-2 border-transparent text-right">
                {sumTotalValueFormatted} €
            </div>
        </>
    );
}

export { CustomRollRowResultLabel };
