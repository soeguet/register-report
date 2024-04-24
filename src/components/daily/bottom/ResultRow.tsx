import {
    DailyObjectType,
    useDailyStore,
} from "../../../stores/daily/dailyStore.ts";
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
    async function validationRequest() {
        const applicationState = useDailyStore.getState()
            .dailyValues as DailyObjectType;
        const targetValue = useDailyStore.getState().targetValue;

        const requestPayload = {
            payloadType: 1,
            requestValidation: {
                targetValue: targetValue.toFixed(2),
            },
            requestValues: {
                euro200: applicationState["200_euro"],
                // euro100: applicationState["100_euro"],
                // euro50: applicationState["50_euro"],
                // euro20: applicationState["20_euro"],
                // euro10: applicationState["10_euro"],
                // euro5: applicationState["5_euro"],
                // euro2: applicationState["2_euro"],
                // euro1: applicationState["1_euro"],
                // cent50: applicationState["50_cent"],
                // cent20: applicationState["20_cent"],
                // cent10: applicationState["10_cent"],
                // cent5: applicationState["5_cent"],
                // cent2: applicationState["2_cent"],
                // cent1: applicationState["1_cent"],
            },
        };

        console.log(JSON.stringify(requestPayload));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestPayload),
        };

        await fetch("http://localhost:8080/api/v1/calculate", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log("error", error));
    }

    return (
        <>
            <div className="flex flex-col p-5 text-nowrap">
                <TargetValue />
                <TotalValue />
                <DiffValue />
            </div>

            <div className="flex">
                <button
                    className="bg-red-300 m-auto p-3 rounded-lg "
                    onClick={validationRequest}
                >
                    Validate
                </button>
            </div>
        </>
    );
}

export { ResultRow };
