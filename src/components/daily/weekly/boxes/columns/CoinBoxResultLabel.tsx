function CoinBoxResultLabel() {
	return (
		<>
			<div className="flex">
				<div className="mr-2 flex w-20 flex-col text-right">
					<CustomBoxRowAmountLabel coinsPerRoll={25} rollsPerBox={5} nominal="2_euro"/>
					<CustomBoxRowAmountLabel coinsPerRoll={25} rollsPerBox={5} nominal="1_euro"/>
					<CustomBoxRowAmountLabel coinsPerRoll={40} rollsPerBox={5} nominal="50_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={40} rollsPerBox={5} nominal="20_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={40} rollsPerBox={5} nominal="10_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={50} rollsPerBox={5} nominal="5_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={50} rollsPerBox={5} nominal="2_cent"/>
					<CustomBoxRowAmountLabel coinsPerRoll={50} rollsPerBox={5} nominal="1_cent"/>
				</div>
				<div className="mr-2 flex w-20 flex-col text-right">
					<CustomBoxRowTotalLabel coinsPerRoll={25} rollsPerBox={5} nominal="2_euro"/>
					<CustomBoxRowTotalLabel coinsPerRoll={25} rollsPerBox={5} nominal="1_euro"/>
					<CustomBoxRowTotalLabel coinsPerRoll={40} rollsPerBox={5} nominal="50_cent"/>
					<CustomBoxRowTotalLabel coinsPerRoll={40} rollsPerBox={5} nominal="20_cent"/>
					<CustomBoxRowTotalLabel coinsPerRoll={40} rollsPerBox={5} nominal="10_cent"/>
					<CustomBoxRowTotalLabel coinsPerRoll={50} rollsPerBox={5} nominal="5_cent"/>
					<CustomBoxRowTotalLabel coinsPerRoll={50} rollsPerBox={5} nominal="2_cent"/>
					<CustomBoxRowTotalLabel coinsPerRoll={50} rollsPerBox={5} nominal="1_cent"/>
				</div>
			</div>
		</>
	);
}

export { CoinBoxResultLabel };
