import { CustomInputField } from "../cells/CustomInputField.tsx";

type InputColumnProps = {
    idName: string;
    index: number;
};

function InputColumn(props: InputColumnProps) {
    return (
        <>
            <div id={props.idName} className="p-2 gap-1 text-nowrap">
                <CustomInputField nominal={"200_euro"} index={props.index} />
                <CustomInputField nominal={"100_euro"} index={props.index} />
                <CustomInputField nominal={"50_euro"} index={props.index} />
                <CustomInputField nominal={"20_euro"} index={props.index} />
                <CustomInputField nominal={"10_euro"} index={props.index} />
                <CustomInputField nominal={"5_euro"} index={props.index} />
                <CustomInputField nominal={"2_euro"} index={props.index} />
                <CustomInputField nominal={"1_euro"} index={props.index} />
                <CustomInputField nominal={"50_cent"} index={props.index} />
                <CustomInputField nominal={"20_cent"} index={props.index} />
                <CustomInputField nominal={"10_cent"} index={props.index} />
                <CustomInputField nominal={"5_cent"} index={props.index} />
                <CustomInputField nominal={"2_cent"} index={props.index} />
                <CustomInputField nominal={"1_cent"} index={props.index} />
            </div>
        </>
    );
}

export { InputColumn };

