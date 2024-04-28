import { DailyObjectNominal } from "../../../../stores/daily/dailyStore.ts";
import { coinLabels } from "../../../../utils/customTypes.ts";

type CustomLabelProps = {
    labelTitle: DailyObjectNominal;
};

function CustomLabel(props: CustomLabelProps) {
    const label = coinLabels[props.labelTitle];
    return (
        <>
            <div className="m-2 text-nowrap  border border-transparent text-right">
                {label}
            </div>
            {props.labelTitle === "5_euro" && (
                <div className="overflow-hidden text-nowrap text-right font-extralight">
                    ----------------------------------------------
                </div>
            )}
        </>
    );
}

export { CustomLabel };
