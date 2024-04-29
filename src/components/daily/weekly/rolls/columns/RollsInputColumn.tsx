import { CustomRollInput } from "../cells/CustomRollInput";

type RollsInputColumnProps = {
	index:number
}

function RollsInputColumn(props:RollsInputColumnProps) {
    return (
        <>
            <div className="flex w-20 flex-col">
				<CustomRollInput index={props.index} nominal="2_euro" />
				<CustomRollInput index={props.index} nominal="1_euro" />
				<CustomRollInput index={props.index} nominal="50_cent" />
				<CustomRollInput index={props.index} nominal="20_cent" />
				<CustomRollInput index={props.index} nominal="10_cent" />
				<CustomRollInput index={props.index} nominal="5_cent" />
				<CustomRollInput index={props.index} nominal="2_cent" />
				<CustomRollInput index={props.index} nominal="1_cent" />
            </div>
        </>
    );
}

export { RollsInputColumn};
