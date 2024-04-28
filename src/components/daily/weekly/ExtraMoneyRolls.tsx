import { CoinRollResultLabel } from "./CoinRollResultLabel";
import { CoinRollsTotalLabel } from "./CoinRollsTotalLabel";
import { CoinsLabel } from "./CoinsLabel";

function ExtraMoneyRolls() {
	return (
		<>
			<div className="flex-col text-nowrap bg-cyan-300">
				<div className="flex">
					<CoinsLabel />
					<div className="flex w-20 flex-col">
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
					</div>
					<div className="flex w-20 flex-col">
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
						<input
							type="number"
							className=" m-0.5 border border-black "
						/>
					</div>
					<CoinRollResultLabel />
				</div>
				<CoinRollsTotalLabel />
			</div>
		</>
	);
}

export { ExtraMoneyRolls };
