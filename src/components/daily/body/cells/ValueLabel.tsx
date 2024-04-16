import {
    DailyObjectNominal,
    useDailyStore,
} from "../../../../stores/daily/dailyStore.ts";
import { formatNumber } from "../../../../utils/converter.ts";
import { coinValues } from "../../../../utils/customTypes.ts";
import { useMemo } from "react";

type ValueLabelProps = {
    nominal: DailyObjectNominal;
};

function ValueLabel(props: ValueLabelProps) {
    const dailyObject = useDailyStore((state) => state.dailyValues);

    const amount: number = useMemo(() => {
        if (!dailyObject || !dailyObject[props.nominal]) {
            return 0;
        }
        const values = dailyObject[props.nominal] || [];
        const sum = values.reduce(
            (acc, value) => acc + parseFloat(value || "0"),
            0,
        );
        const value = coinValues[props.nominal];
        return sum * value;
    }, [dailyObject, props.nominal]);

    return (
        <>
            <div className="text-right m-2 border border-transparent text-nowrap">
                {formatNumber(amount)} €
            </div>
            {props.nominal === "5_euro" && (
                <div className="text-right font-extralight overflow overflow-hidden text-nowrap ">
                    --------------------------------------------------
                </div>
            )}
        </>
    );
}

export { ValueLabel };
