import { CustomRollRowAmountLabel } from "../cells/CustomRollRowAmountLabel";

function CoinRollAmountResultColumn() {
	return (
		<>
			<div className="mr-2 flex grow flex-col text-right">
				<CustomRollRowAmountLabel coinsPerRoll={25} nominal="2_euro" />
				<CustomRollRowAmountLabel coinsPerRoll={25} nominal="1_euro" />
				<CustomRollRowAmountLabel coinsPerRoll={40} nominal="50_cent" />
				<CustomRollRowAmountLabel coinsPerRoll={40} nominal="20_cent" />
				<CustomRollRowAmountLabel coinsPerRoll={40} nominal="10_cent" />
				<CustomRollRowAmountLabel coinsPerRoll={50} nominal="5_cent" />
				<CustomRollRowAmountLabel coinsPerRoll={50} nominal="2_cent" />
				<CustomRollRowAmountLabel coinsPerRoll={50} nominal="1_cent" />
			</div>
		</>
	);
}

export { CoinRollAmountResultColumn };
