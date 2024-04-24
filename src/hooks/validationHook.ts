import { DailyObjectType, useDailyStore } from "../stores/daily/dailyStore";

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

    console.log(JSON.stringify(requestPayload));

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload),
    };

    await fetch("http://localhost:8080/api/v1/calculate", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(() => useDailyStore.getState().setIsFetchingData(false))
        .catch((error) => console.log("error", error));
}
