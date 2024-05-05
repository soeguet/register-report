import { ButtonField } from "./ButtonField.js";
import { TargetInputField } from "./TargetInputField.js";
import { WeeklyCheckbox } from "./WeeklyCheckbox.js";

interface TopAreaProps {
    bodyRef: React.RefObject<HTMLDivElement>;
}
function TopArea(props: TopAreaProps) {
    return (
        <>
            <div className="flex justify-center text-nowrap">
                <WeeklyCheckbox />
                <ButtonField bodyRef={props.bodyRef} />
                <TargetInputField />
            </div>
        </>
    );
}

export { TopArea };
