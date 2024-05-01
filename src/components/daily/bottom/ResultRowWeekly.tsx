import { DiffValue } from "./result/DiffValue.tsx";
import { TargetValue } from "./result/TargetValue.tsx";
import { TotalValue } from "./result/TotalValue.tsx";

function ResultRowWeekly() {
	return (
		<>
			<div className="flex flex-col text-nowrap bg-blue-400 p-5">
				<TargetValue />
				<TotalValue />
				<DiffValue />
			</div>
		</>
	);
}

export { ResultRowWeekly };