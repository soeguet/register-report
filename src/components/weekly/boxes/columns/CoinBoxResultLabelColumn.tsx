import { CustomBoxRowTotalLabel } from "../cells/CustomBoxRowTotalLabel";

function CoinBoxResultLabelColumn() {
	return (
		<>
			<div className="mr-2 flex shrink flex-col text-right">
				<CustomBoxRowTotalLabel
					coinsPerRoll={25}
					nominal="2_euro"
				/>
				<CustomBoxRowTotalLabel
					coinsPerRoll={25}
					nominal="1_euro"
				/>
				<CustomBoxRowTotalLabel
					coinsPerRoll={40}
					nominal="50_cent"
				/>
				<CustomBoxRowTotalLabel
					coinsPerRoll={40}
					nominal="20_cent"
				/>
				<CustomBoxRowTotalLabel
					coinsPerRoll={40}
					nominal="10_cent"
				/>
				<CustomBoxRowTotalLabel
					coinsPerRoll={50}
					nominal="5_cent"
				/>
				<CustomBoxRowTotalLabel
					coinsPerRoll={50}
					nominal="2_cent"
				/>
				<CustomBoxRowTotalLabel
					coinsPerRoll={50}
					nominal="1_cent"
				/>
			</div>
		</>
	);
}

export { CoinBoxResultLabelColumn };
