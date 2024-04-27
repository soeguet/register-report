import { ExtraMoneyBoxes } from "./ExtraMoneyBoxes";

function ExtraMoneyRolls() {
    return (
        <>
            <div className="text-nowrap bg-cyan-300">
                <h2>Extra Money Rolls</h2>

                <div className="flex border border-red-700">
                    <div className="flex flex-col">
                        <div className="m-0.5 border border-transparent">2 €</div>
                        <div className="m-0.5 border border-transparent">1 €</div>
                        <div className="m-0.5 border border-transparent">
                            50 c
                        </div>
                        <div className="m-0.5 border border-transparent">
                            20 c
                        </div>
                        <div className="m-0.5 border border-transparent">
                            10 c
                        </div>
                        <div className="m-0.5 border border-transparent">5 c</div>
                        <div className="m-0.5 border border-transparent">2 c</div>
                        <div className="m-0.5 border border-transparent">1 c</div>
                    </div>
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                </div>
                <ExtraMoneyBoxes />
            </div>
        </>
    );
}

export { ExtraMoneyRolls };
