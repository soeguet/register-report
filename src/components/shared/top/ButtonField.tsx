import { PdfButton } from "./buttons/PdfButton.js";
import { ResetButton } from "./buttons/ResetButton.js";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

type ButtonFieldProps = {
    bodyRef: React.RefObject<HTMLDivElement>;
};

function ButtonField(props: ButtonFieldProps) {
    return (
        <>
            <span className="my-2 inline-flex">
                <PdfButton
                    bodyRef={props.bodyRef}
                    html2canvas={html2canvas}
                    jsPDF={jsPDF}
                />
                <div className="px-3 py-2"></div>
                <ResetButton />
            </span>
        </>
    );
}

export { ButtonField };
