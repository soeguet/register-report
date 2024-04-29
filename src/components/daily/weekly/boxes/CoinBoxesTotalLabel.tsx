import { useWeeklyStore } from "../../../../stores/weekly/weeklyStore";

function CoinBoxesTotalLabel() {
	const boxValues = useWeeklyStore((state) => state.boxValues);

    return (
        <>
            <div className="mr-5 text-right">RESULT</div>
        </>
    );
}

export { CoinBoxesTotalLabel };
