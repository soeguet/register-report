import html2canvas from "html2canvas";
import { getCurrentDateTime } from "../../../../utils/time";
import jsPDF from "jspdf";

type PdfButtonProps = {
	bodyRef: React.RefObject<HTMLDivElement>;
	html2canvas: typeof html2canvas;
	jsPDF: typeof jsPDF;
};

function PdfButton(props: PdfButtonProps) {
	const downloadPdf = async () => {
		if (props.bodyRef.current) {
			const canvas = await props.html2canvas(props.bodyRef.current);
			const imgData = canvas.toDataURL("image/jpeg");
			const pdf = new props.jsPDF({
				orientation: "landscape",
				unit: "mm",
				format: "a4",
				putOnlyUsedFonts: true,
				floatPrecision: 16,
			});

			pdf.addImage(imgData, "JPEG", 0, 0, 1920 / 6.5, 1080 / 6.5);
			pdf.save(getCurrentDateTime() + ".pdf");
		}
	};

	return (
		<>
			<button
				type="button"
				className="relative inline-flex items-center rounded-l-md bg-blue-400 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
				onClick={downloadPdf}
			>
				save PDF
			</button>
		</>
	);
}

export { PdfButton };
