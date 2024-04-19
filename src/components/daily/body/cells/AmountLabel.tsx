import {
    DailyObjectNominal,
    useDailyStore,
} from "../../../../stores/daily/dailyStore.ts";
import { useMemo } from "react";

type AmountLabelProps = {
    nominal: DailyObjectNominal;
};

function AmountLabel(props: AmountLabelProps) {
    const objectWithDailyValues = useDailyStore(
        (state) => state.dailyValues[props.nominal],
    );

    const amount = useMemo(() => {
        if (!objectWithDailyValues) {
            return 0;
        }
        const sum = objectWithDailyValues.reduce(
            (acc, value) => acc + value,
            0,
        );
        return sum;
    }, [objectWithDailyValues]);

    return (
        <>
            <div className="text-right m-2 border border-transparent text-nowrap">
                {amount} x
            </div>
            {props.nominal === "5_euro" && (
                <div className="text-right font-extralight overflow-hidden text-nowrap">
                    ---------------------------------------------------
                </div>
            )}
        </>
    );
}

export { AmountLabel };
