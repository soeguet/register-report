import { cointLabels } from "../../../../utils/customTypes.ts";

type CustomLabelProps = {
    labelTitle: string;
};

function CustomLabel(props: CustomLabelProps) {
    const label = cointLabels[props.labelTitle];
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

