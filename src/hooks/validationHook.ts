import { RequestPayload } from "../components/shared/bottom/ResultRow";
import { DailyObjectType, useDailyStore } from "../stores/daily/dailyStore";

const apiURL = import.meta.env.VITE_API_URL;
const apiPort = import.meta.env.VITE_API_PORT;

function debounce<F extends (...args: any[]) => void>(
    func: F,
    waitFor: number,
) {
    let timeoutId: number | undefined;

    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => func.apply(this, args), waitFor);
    } as F;
}

export const fetchWithDebounce = debounce(async () => {
    try {
        await validationRequest();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}, 1000);

function collectDataIntoObject(target: number, data: DailyObjectType): RequestPayload {

    return {
        payloadType: 1,
        requestValidation: {
            targetValue: target.toFixed(2),
        },
        requestValues: {
            euro200: data["200_euro"],
            euro100: data["100_euro"],
            euro50: data["50_euro"],
            euro20: data["20_euro"],
            euro10: data["10_euro"],
            euro5: data["5_euro"],
            euro2: data["2_euro"],
            euro1: data["1_euro"],
            cent50: data["50_cent"],
            cent20: data["20_cent"],
            cent10: data["10_cent"],
            cent5: data["5_cent"],
            cent2: data["2_cent"],
            cent1: data["1_cent"],
        },
    };
}

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
            euro100: applicationState["100_euro"],
            euro50: applicationState["50_euro"],
            euro20: applicationState["20_euro"],
            euro10: applicationState["10_euro"],
            euro5: applicationState["5_euro"],
            euro2: applicationState["2_euro"],
            euro1: applicationState["1_euro"],
            cent50: applicationState["50_cent"],
            cent20: applicationState["20_cent"],
            cent10: applicationState["10_cent"],
            cent5: applicationState["5_cent"],
            cent2: applicationState["2_cent"],
            cent1: applicationState["1_cent"],
        },
    };

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload),
    };

    await fetch(`http://${apiURL}:${apiPort}/api/v1/calculate`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            useDailyStore.getState().setFetchedData({
                apiTotalValue: data.responseValues.totalValue,
                apiDiffValue: data.responseValues.differenceValue,
            });
            useDailyStore.getState().setIsFetchingData(false);
        })
        .catch((error) => console.log("error", error));
}
