import { BoxInputColumn } from "./BoxInputColumn";
import { CoinBoxResultLabel } from "./CoinBoxResultLabel";
import { CoinBoxesTotalLabel } from "./CoinBoxesTotalLabel";
import { CoinsLabel } from "./CoinsLabel";

function ExtraMoneyBoxes() {
	return (
		<>
			<div className="flex-col text-nowrap bg-zinc-400">
				<div className="flex">
					<CoinsLabel />
					<BoxInputColumn />
					<CoinBoxResultLabel />
				</div>
				<CoinBoxesTotalLabel />
			</div>
		</>
	);
}

export { ExtraMoneyBoxes };
