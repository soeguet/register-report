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

        const requestPayload = {
            payloadType: 1,
            requestValidation: {
                targetValue: "100",
            },
            requestValues: {
                euro200: applicationState["200_euro"][0],
            },
        };

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
            <button onClick={validationRequest}>Validate</button>
        </>
    );
}

export { ResultRow };
