import { CustomRollRowResultLabel } from "../cells/CustomRollRowResultLabel.tsx";

function CoinRollValueResultColumn() {
	return (
		<>
			<div className="mr-2 flex shrink flex-col text-right">
				<CustomRollRowResultLabel coinsPerRoll={25} nominal="2_euro" />
				<CustomRollRowResultLabel coinsPerRoll={25} nominal="1_euro" />
				<CustomRollRowResultLabel coinsPerRoll={40} nominal="50_cent" />
				<CustomRollRowResultLabel coinsPerRoll={40} nominal="20_cent" />
				<CustomRollRowResultLabel coinsPerRoll={40} nominal="10_cent" />
				<CustomRollRowResultLabel coinsPerRoll={50} nominal="5_cent" />
				<CustomRollRowResultLabel coinsPerRoll={50} nominal="2_cent" />
				<CustomRollRowResultLabel coinsPerRoll={50} nominal="1_cent" />
			</div>
		</>
	);
}

export { CoinRollValueResultColumn };
