import { CustomBoxInput } from "../CustomBoxInput";

function BoxInputColumn() {
	return (
		<>
			<div className="flex flex-col">
				<CustomBoxInput nominal="2_euro" index={0} />
				<CustomBoxInput nominal="1_euro" index={0} />
				<CustomBoxInput nominal="50_cent" index={0} />
				<CustomBoxInput nominal="20_cent" index={0} />
				<CustomBoxInput nominal="10_cent" index={0} />
				<CustomBoxInput nominal="5_cent" index={0} />
				<CustomBoxInput nominal="2_cent" index={0} />
				<CustomBoxInput nominal="1_cent" index={0} />
			</div>
		</>
	);
}

export { BoxInputColumn };