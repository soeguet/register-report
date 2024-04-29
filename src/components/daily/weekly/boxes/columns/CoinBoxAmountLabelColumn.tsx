import { CustomBoxRowAmountLabel } from "../CustomBoxRowAmountLabel";

function CoinBoxAmountLabelColumn() {

    return (
        <>
				<div className="mr-2 flex w-20 flex-col text-right">
					<CustomBoxRowAmountLabel coinsPerRoll={25} rollsPerBox={5} nominal="2_euro"/>
					<CustomBoxRowAmountLabel coinsPerRoll={25} rollsPerBox={5} nominal="1_euro"/>
					<CustomBoxRowAmountLabel coinsPerRoll={40} rollsPerBox={3} nominal="50_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={40} rollsPerBox={3} nominal="20_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={40} rollsPerBox={3} nominal="10_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={50} rollsPerBox={3} nominal="5_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={50} rollsPerBox={5} nominal="2_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={50} rollsPerBox={5} nominal="1_cent"/>
				</div>
        </>
    );
}

export {CoinBoxAmountLabelColumn};