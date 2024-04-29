import { BoxInputColumn } from "./columns/BoxInputColumn";
import { CoinBoxResultLabel } from "./CoinBoxResultLabel";
import { CoinBoxesTotalLabel } from "./CoinBoxesTotalLabel";
import { CoinsLabel } from "../rolls/columns/CoinsLabel";

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
