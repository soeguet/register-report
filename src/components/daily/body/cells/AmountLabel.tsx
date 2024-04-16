import { useDailyStore } from "../../../../stores/daily/dailyStore.ts";
import { useMemo } from "react";

type AmountLabelProps = {
    nominal: string;
};

function AmountLabel(props: AmountLabelProps) {
    const dailyObject = useDailyStore((state) => state.dailyValues);

    const amount = useMemo(() => {
        if (!dailyObject || !dailyObject[props.nominal]) {
            return 0;
        }
        const values = dailyObject[props.nominal] || [];
        const sum = values.reduce(
            (acc, value) => acc + parseFloat(value || 0),
            0,
        );
        return sum;
    }, [dailyObject, props.nominal]);

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

