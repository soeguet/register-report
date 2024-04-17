import { getCurrentDateTime } from "../../../../utils/time";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

type PdfButtonProps = {
    bodyRef: React.RefObject<HTMLDivElement>;
};
function PdfButton(props: PdfButtonProps) {
    const downloadPdf = async () => {
        if (props.bodyRef.current) {
            const canvas = await html2canvas(props.bodyRef.current);
            const imgData = canvas.toDataURL("image/jpeg");
            const pdf = new jsPDF({
                orientation: "landscape",
                unit: "mm",
                format: "a4",
                putOnlyUsedFonts: true,
                floatPrecision: 16,
            });

            pdf.addImage(imgData, "JPEG", 0, 0, 250, 250);
            const pdfName = getCurrentDateTime();
            pdf.save(pdfName + ".pdf");
        }
    };
    return (
        <>
            <button
                type="button"
                className="relative inline-flex items-center bg-blue-400 rounded-l-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                onClick={downloadPdf}
            >
                save PDF
            </button>
        </>
    );
}

export { PdfButton };