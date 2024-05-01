import { DailyObjectNominal } from "../../../../stores/daily/dailyStore.ts";
import { coinLabels } from "../../../../utils/customTypes.ts";

type CustomLabelProps = {
	labelTitle: DailyObjectNominal;
};

function CustomLabel(props: CustomLabelProps) {
	const label = coinLabels[props.labelTitle];
	return (
		<>
			<div className="m-0.5 border-2 border-transparent text-right">
				{label}
			</div>
			{props.labelTitle === "5_euro" && <div className="py-2 "></div>}
		</>
	);
}

export { CustomLabel };