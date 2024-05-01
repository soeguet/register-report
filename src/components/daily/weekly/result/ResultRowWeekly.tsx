import { DiffValueWeekly } from "./DiffValueWeekly.tsx";
import { TargetValueWeekly } from "./TargetValueWeekly.tsx";
import { TotalValueWeekly } from "./TotalValueWeekly.tsx";

function ResultRowWeekly() {
    return (
        <>
            <div className="relative flex">
                <div className="absolute -left-7 top-5 -rotate-90 ">
                    total
                </div>
                <div className="flex flex-col text-nowrap p-5">
                    <TargetValueWeekly />
                    <TotalValueWeekly />
                    <DiffValueWeekly />
                </div>
            </div>
        </>
    );
}

export { ResultRowWeekly };
