import { PdfButton } from "./buttons/PdfButton.tsx";
import { ResetButton } from "./buttons/ResetButton.tsx";

type ButtonFieldProps = {
    bodyRef: React.RefObject<HTMLDivElement>;
};

function ButtonField(props: ButtonFieldProps) {
    return (
        <>
            <span className="inline-flex my-2">
                <PdfButton bodyRef={props.bodyRef} />
                <div className="px-3 py-2"></div>
                <ResetButton />
            </span>
        </>
    );
}

export { ButtonField };

