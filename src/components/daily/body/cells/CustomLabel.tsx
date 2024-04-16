import { DailyObjectNominal } from "../../../../stores/daily/dailyStore.ts";
import { coinLabels } from "../../../../utils/customTypes.ts";

type CustomLabelProps = {
    labelTitle: DailyObjectNominal;
};

function CustomLabel(props: CustomLabelProps) {
    const label = coinLabels[props.labelTitle];
    return (
        <>
            <div className="text-right m-2  border border-transparent text-nowrap">
                {label}
            </div>
            {props.labelTitle === "5_euro" && (
                <div className="text-right font-extralight overflow-hidden text-nowrap">
                    ----------------------------------------------
                </div>
            )}
        </>
    );
}

export { CustomLabel };
