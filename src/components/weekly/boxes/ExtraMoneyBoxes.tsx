import { CoinsLabel } from "../rolls/columns/CoinsLabel";
import { CoinBoxesTotalLabel } from "./cells/CoinBoxesTotalLabel";
import { BoxInputColumn } from "./columns/BoxInputColumn";
import { CoinBoxAmountLabelColumn } from "./columns/CoinBoxAmountLabelColumn";
import { CoinBoxResultLabelColumn } from "./columns/CoinBoxResultLabelColumn";

function ExtraMoneyBoxes() {
	return (
		<>
			<div className="relative flex justify-center ">
				<div className=" absolute  -left-10 top-3 -rotate-90">
					boxes
				</div>
				<div className="mb-3 flex shrink flex-col text-nowrap ">
					<div className="flex justify-between gap-2">
						<CoinsLabel />
						<BoxInputColumn />
						<div className="flex grow justify-between">
							<CoinBoxAmountLabelColumn />
							<CoinBoxResultLabelColumn />
						</div>
					</div>
					<CoinBoxesTotalLabel />
				</div>
			</div>
		</>
	);
}

export { ExtraMoneyBoxes };
