import { AmountColumn } from "./body/columns/AmountColumn.tsx";
import { InputColumn } from "./body/columns/InputColumn.tsx";
import { LabelColumn } from "./body/columns/LabelColumn.tsx";
import { ValueColumn } from "./body/columns/ValueColumn.tsx";
import { DateTimeDisplay } from "./bottom/DateTimeDisplay.tsx";
import { ResultRow } from "./bottom/ResultRow.tsx";
import { TopArea } from "./top/TopArea.tsx"
import { WeeklyContainer } from "./weekly/WeeklyContainer.tsx"
import React from 'react';

function MainFrame() {
    const mainBodyRef = React.useRef(null);
    return (
        <>
            <main
                data-testid="daily-main-body"
                className="m-auto mb-1 h-screen p-10"
                ref={mainBodyRef}
            >
                <TopArea bodyRef={mainBodyRef} />
                <div className=" flex grow border border-blue-500">
                    <WeeklyContainer />
                    <div className="grid grid-cols-8 border border-black">
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
                <div className="flex justify-evenly">
                    <ResultRow />
                    <DateTimeDisplay />
                </div>
            </main>
        </>
    );
}

export { MainFrame };
