import { CoinBoxResultLabel } from "./CoinBoxResultLabel";
import { CoinBoxesTotalLabel } from "./CoinBoxesTotalLabel";
import { CoinsLabel } from "./CoinsLabel";

function ExtraMoneyBoxes() {
	return (
		<>
			<div className="flex-col text-nowrap bg-zinc-400">
				<div className="flex">
					<CoinsLabel />
					<div className="flex flex-col w-40">
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
					<CoinBoxResultLabel />
				</div>
				<CoinBoxesTotalLabel />
			</div>
		</>
	);
}

export { ExtraMoneyBoxes };
