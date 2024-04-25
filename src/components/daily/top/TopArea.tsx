import { ButtonField } from "./ButtonField.tsx";
import { TargetInputField } from "./TargetInputField.tsx";
import { WeeklyCheckbox } from "./WeeklyCheckbox.tsx";

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
