import { CoinRollAmountResultColumn } from "./columns/CoinRollAmountResultColumn";
import { CoinRollValueResultColumn } from "./columns/CoinRollValueResultColumn";
import { CoinRollsTotalLabel } from "./cells/CoinRollsTotalLabel";
import { CoinsLabel } from "./columns/CoinsLabel";
import { RollsInputColumn } from "./columns/RollsInputColumn";

function ExtraMoneyRolls() {
	return (
		<>
			<div className="relative flex justify-center ">
				<div className=" absolute -left-10 top-3 -rotate-90">rolls</div>
				<div className="mb-3 flex shrink flex-col text-nowrap">
					<div className="flex justify-between gap-2">
						<CoinsLabel />
						<div className="flex justify-evenly">
							<RollsInputColumn index={0} />
							<RollsInputColumn index={1} />
						</div>
						<CoinRollAmountResultColumn />
						<CoinRollValueResultColumn />
					</div>
					<CoinRollsTotalLabel />
				</div>
			</div>
		</>
	);
}

export { ExtraMoneyRolls };
