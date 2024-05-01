import { TargetValueWeekly } from "./TargetValueWeekly.tsx";
import { DiffValue } from "../../bottom/result/DiffValue.tsx";
import { TotalValueWeekly } from "./TotalValueWeekly.tsx";

function ResultRowWeekly() {
	return (
		<>
			<div className="flex flex-col text-nowrap bg-blue-400 p-5">
				<TargetValueWeekly />
				<TotalValueWeekly />
				<DiffValue />
			</div>
		</>
	);
}

export { ResultRowWeekly };
