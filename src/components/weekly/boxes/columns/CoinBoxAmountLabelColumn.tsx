import { CustomBoxRowAmountLabel } from "../cells/CustomBoxRowAmountLabel";

function CoinBoxAmountLabelColumn() {
	return (
		<>
			<div className="mr-2 grow flex-col ">
				<CustomBoxRowAmountLabel
					coinsPerRoll={25}
					nominal="2_euro"
				/>
				<CustomBoxRowAmountLabel
					coinsPerRoll={25}
					nominal="1_euro"
				/>
				<CustomBoxRowAmountLabel
					coinsPerRoll={40}
					nominal="50_cent"
				/>
				<CustomBoxRowAmountLabel
					coinsPerRoll={40}
					nominal="20_cent"
				/>
				<CustomBoxRowAmountLabel
					coinsPerRoll={40}
					nominal="10_cent"
				/>
				<CustomBoxRowAmountLabel
					coinsPerRoll={50}
					nominal="5_cent"
				/>
				<CustomBoxRowAmountLabel
					coinsPerRoll={50}
					nominal="2_cent"
				/>
				<CustomBoxRowAmountLabel
					coinsPerRoll={50}
					nominal="1_cent"
				/>
			</div>
		</>
	);
}

export { CoinBoxAmountLabelColumn };
