import { CustomLabel } from "../cells/CustomLabel.tsx";

function LabelColumn() {
    return (
        <>
            <div className="p-2">
                <CustomLabel labelTitle={"200_euro"} />
                <CustomLabel labelTitle={"100_euro"} />
                <CustomLabel labelTitle={"50_euro"} />
                <CustomLabel labelTitle={"20_euro"} />
                <CustomLabel labelTitle={"10_euro"} />
                <CustomLabel labelTitle={"5_euro"} />
                <CustomLabel labelTitle={"2_euro"} />
                <CustomLabel labelTitle={"1_euro"} />
                <CustomLabel labelTitle={"50_cent"} />
                <CustomLabel labelTitle={"20_cent"} />
                <CustomLabel labelTitle={"10_cent"} />
                <CustomLabel labelTitle={"5_cent"} />
                <CustomLabel labelTitle={"2_cent"} />
                <CustomLabel labelTitle={"1_cent"} />
            </div>
        </>
    );
}

export { LabelColumn };