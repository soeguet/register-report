import { CoinBoxesTotalLabel } from "./CoinBoxesTotalLabel";
import { BoxInputColumn } from "./columns/BoxInputColumn";
import { CoinsLabel } from "../rolls/columns/CoinsLabel";
import { CoinBoxResultLabelColumn } from "./columns/CoinBoxResultLabelColumn";
import { CoinBoxAmountLabelColumn } from "./columns/CoinBoxAmountLabelColumn";

function ExtraMoneyBoxes() {
    return (
        <>
            <div className="flex-col text-nowrap bg-zinc-400">
                <div className="flex">
                    <CoinsLabel />
                    <BoxInputColumn />
                    <div className="flex">
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
