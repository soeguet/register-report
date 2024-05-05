import { DiffValue } from "../../daily/bottom/result/DiffValue.tsx";
import { TargetValue } from "../../daily/bottom/result/TargetValue.tsx";
import { TotalValue } from "../../daily/bottom/result/TotalValue.tsx";

export type RequestPayload = {
	payloadType: number;
	requestValidation: {
		targetValue: string;
	};
	requestValues: {
		euro200: number;
	};
};

function ResultRow() {
	return (
		<>
			<div className="flex flex-col text-nowrap p-5">
				<TargetValue />
				<TotalValue />
				<DiffValue />
			</div>
		</>
	);
}

export { ResultRow };
