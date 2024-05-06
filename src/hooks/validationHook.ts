import { useDailyStore } from "../stores/daily/dailyStore";
import { WeeklyObjectType, useWeeklyStore } from "../stores/weekly/weeklyStore";
import { debounce } from "../utils/helper";

const apiURL = import.meta.env.VITE_API_URL;
const apiPort = import.meta.env.VITE_API_PORT;

export const fetchWithDebounce = debounce(async () => {
    try {
        await validationRequest(useDailyStore, useWeeklyStore, apiURL, apiPort);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}, 1000);

type DailyNominalType = "euro200" | "euro100" | "euro50" | "euro20" | "euro10" | "euro5" | "euro2" | "euro1" | "cent50" | "cent20" | "cent10" | "cent5" | "cent2" | "cent1";
type DailyRequestValuesType = {
    [key in DailyNominalType]: number[];
}

type WeeklyNominalType = "euro2" | "euro1" | "cent50" | "cent20" | "cent10" | "cent5" | "cent2" | "cent1";
type WeeklyRequestValuesType = {
    [key in WeeklyNominalType]: number[];
}

type WeeklyPayloadType = {
    payloadType: number;
    requestValidation: {
        targetValue: string;
    };
    requestValues: DailyRequestValuesType,
    boxValues: WeeklyRequestValuesType,
    rollValues: WeeklyRequestValuesType
};

const apiNominalKeysWeekly: { [key: string]: WeeklyNominalType } = {
    "2_euro": "euro2",
    "1_euro": "euro1",
    "50_cent": "cent50",
    "20_cent": "cent20",
    "10_cent": "cent10",
    "5_cent": "cent5",
    "2_cent": "cent2",
    "1_cent": "cent1",
};
const apiNominalKeysDaily: { [key: string]: DailyNominalType } = {
    "200_euro": "euro200",
    "100_euro": "euro100",
    "50_euro": "euro50",
    "20_euro": "euro20",
    "10_euro": "euro10",
    "5_euro": "euro5",
    "2_euro": "euro2",
    "1_euro": "euro1",
    "50_cent": "cent50",
    "20_cent": "cent20",
    "10_cent": "cent10",
    "5_cent": "cent5",
    "2_cent": "cent2",
    "1_cent": "cent1",
};

interface DailyObject {
    [key: string]: number[];
}

interface Store {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
    getState: () => any;
}

function extractStateData(useStore: Store) {
    return useStore.getState();
}

function createRequestPayload(dailyValues: DailyObject, targetValue: number, isWeeklyActivated: boolean, boxValues: DailyObject, rollValues: DailyObject): WeeklyPayloadType {
    const payload = {
        payloadType: 1,
        requestValidation: {
            targetValue: targetValue.toFixed(2),
        },
        requestValues: {},
        boxValues: {},
        rollValues: {}
    } as WeeklyPayloadType;

    for (const key in dailyValues) {
        const apiValueKey = apiNominalKeysDaily[key as DailyNominalType];
        payload.requestValues[apiValueKey] = dailyValues[key];
    }

    if (isWeeklyActivated) {
        for (const key in boxValues as WeeklyObjectType) {
            const apiValueKey2 = apiNominalKeysWeekly[key as WeeklyNominalType];
            payload.boxValues[apiValueKey2] = boxValues[key];
        }
        for (const key in rollValues) {
            const apiValueKey = apiNominalKeysWeekly[key as WeeklyNominalType];
            payload.rollValues[apiValueKey] = rollValues[key];
        }
    }

    return payload;
}

// Function to handle API request
async function sendValidationRequest(apiUrl: string, apiPort: string, payload: WeeklyPayloadType, updateState: (data: ResponsePayloadType) => void) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    };

    try {
        const response = await fetch(`http://${apiUrl}:${apiPort}/api/v1/calculate`, requestOptions);
        const data = await response.json();
        updateState(data);
    } catch (error) {
        console.log("error", error);
    }
}

type ResponsePayloadType = {
    payloadType: number,
    responseValues: {
        totalValue: string,
        differenceValue: string
    }
}

// The refactored function
async function validationRequest(useDailyStore: Store, useWeeklyStore: Store, apiURL: string, apiPort: string) {
    const dailyState = extractStateData(useDailyStore);
    const weeklyState = extractStateData(useWeeklyStore);

    const payload = createRequestPayload(
        dailyState.dailyValues,
        dailyState.targetValue,
        weeklyState.isSelected,
        weeklyState.boxValues,
        weeklyState.rollValues
    );

    await sendValidationRequest(apiURL, apiPort, payload, (data) => {
        useDailyStore.getState().setFetchedData({
            apiTotalValue: data.responseValues.totalValue,
            apiDiffValue: data.responseValues.differenceValue,
        });
        useDailyStore.getState().setIsFetchingData(false);
    });
}
