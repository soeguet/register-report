import {
	DailyObjectNominal,
	useDailyStore,
} from "../../../../stores/daily/dailyStore.ts";
import { useMemo } from "react";

type AmountLabelProps = {
	nominal: DailyObjectNominal;
};

function AmountLabel(props: AmountLabelProps) {
	const objectWithDailyValues = useDailyStore(
		(state) => state.dailyValues[props.nominal],
	);

	const amount = useMemo(() => {
		if (!objectWithDailyValues) {
			return 0;
		}
		const sum = objectWithDailyValues.reduce(
			(acc, value) => acc + value,
			0,
		);
		return sum;
	}, [objectWithDailyValues]);

	return (
		<>
			<div
				data-testid={`amount-label-${props.nominal}`}
				className="m-2 text-nowrap border border-transparent text-right"
			>
				{amount} x
			</div>
			{props.nominal === "5_euro" && (
				<div className="overflow-hidden text-nowrap text-right font-extralight">
					---------------------------------------------------
				</div>
			)}
		</>
	);
}

export { AmountLabel };
