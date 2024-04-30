import { CoinBoxesTotalLabel } from "./CoinBoxesTotalLabel";
import { BoxInputColumn } from "./columns/BoxInputColumn";
import { CoinsLabel } from "../rolls/columns/CoinsLabel";
import { CoinBoxResultLabelColumn } from "./columns/CoinBoxResultLabelColumn";
import { CoinBoxAmountLabelColumn } from "./columns/CoinBoxAmountLabelColumn";

function ExtraMoneyBoxes() {
	return (
		<>
			<div className="flex-col text-nowrap border border-blue-500">
				<div className="flex w-full justify-between border border-green-600">
					<CoinsLabel />
					<BoxInputColumn />
					<div className="flex grow justify-between border border-red-600">
						<CoinBoxAmountLabelColumn />
						<CoinBoxResultLabelColumn />
					</div>
				</div>
				<CoinBoxesTotalLabel />
			</div>
		</>
	);
}

export { ExtraMoneyBoxes };
