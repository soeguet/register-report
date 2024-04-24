import { DiffValue } from "./result/DiffValue.tsx";
import { TargetValue } from "./result/TargetValue.tsx";
import { TotalValue } from "./result/TotalValue.tsx";

export type RequestPayload = {
    payloadType: number;
    requestValidation: {
        targetValue: number;
    };
    requestValues: {
        euro200: number;
    };
};

function ResultRow() {
    return (
        <>
            <div className="flex flex-col p-5 text-nowrap">
                <TargetValue />
                <TotalValue />
                <DiffValue />
            </div>
        </>
    );
}

export { ResultRow };
