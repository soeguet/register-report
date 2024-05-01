import { useWeeklyStore } from "../../stores/weekly/weeklyStore.ts";
import { AmountColumn } from "./body/columns/AmountColumn.tsx";
import { InputColumn } from "./body/columns/InputColumn.tsx";
import { LabelColumn } from "./body/columns/LabelColumn.tsx";
import { ValueColumn } from "./body/columns/ValueColumn.tsx";
import { DateTimeDisplay } from "./bottom/DateTimeDisplay.tsx";
import { ResultRow } from "./bottom/ResultRow.tsx";
import { ResultRowWeekly } from "./bottom/ResultRowWeekly.tsx";
import { TopArea } from "./top/TopArea.tsx";
import { WeeklyContainer } from "./weekly/WeeklyContainer.tsx";
import React from "react";

function MainFrame() {
	const mainBodyRef = React.useRef(null);
	const weeklySelected = useWeeklyStore((state) => state.isSelected);
	return (
		<>
			<main
				data-testid="daily-main-body"
				className="p-10"
				ref={mainBodyRef}
			>
				<TopArea bodyRef={mainBodyRef} />
				<div className="flex shrink justify-center gap-5 overflow-hidden rounded-xl border-2 border-black">
					<WeeklyContainer />
					<div className="flex content-center gap-2 p-3 align-middle">
						<LabelColumn />
						<InputColumn idName="input-column-1" index={0} />
						<InputColumn idName="input-column-2" index={1} />
						<InputColumn idName="input-column-3" index={2} />
						<InputColumn idName="input-column-4" index={3} />
						<InputColumn idName="input-column-5" index={4} />
						<AmountColumn />
						<ValueColumn />
					</div>
				</div>
				<div className="flex justify-center gap-20">
					{weeklySelected ? <ResultRowWeekly /> : <ResultRow />}
					<DateTimeDisplay />
				</div>
			</main>
		</>
	);
}

export { MainFrame };