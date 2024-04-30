import { CoinRollResultLabel } from "./columns/CoinRollResultLabel";
import { CoinRollsTotalLabel } from "./columns/CoinRollsTotalLabel";
import { CoinsLabel } from "./columns/CoinsLabel";
import { RollsInputColumn } from "./columns/RollsInputColumn";

function ExtraMoneyRolls() {
    return (
        <>
            <div className="block text-nowrap border border-red-600">
                <div className="flex">
                    <CoinsLabel />
                    <div className="flex">
                        <RollsInputColumn index={0} />
                        <RollsInputColumn index={1} />
                    </div>
                    <CoinRollResultLabel />
                </div>
                <CoinRollsTotalLabel />
            </div>
        </>
    );
}

export { ExtraMoneyRolls };
