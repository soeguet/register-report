function ExtraMoneyBoxes() {
    return (
        <>
            <div className="text-nowrap bg-zinc-400">
                <p>Extra Money Boxes content</p>
                <div className="flex">
                    <div className=" flex flex-col">
                        <div className="m-2 border border-transparent">2 €</div>
                        <div className="m-2 border border-transparent">1 €</div>
                        <div className="m-2 border border-transparent">
                            50 c
                        </div>
                        <div className="m-2 border border-transparent">
                            20 c
                        </div>
                        <div className="m-2 border border-transparent">
                            10 c
                        </div>
                        <div className="m-2 border border-transparent">5 c</div>
                        <div className="m-2 border border-transparent">2 c</div>
                        <div className="m-2 border border-transparent">1 c</div>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="number"
                            className=" border border-black m-2 "
                        />
                        <input
                            type="number"
                            className=" border border-black m-2 "
                        />
                        <input
                            type="number"
                            className=" border border-black m-2 "
                        />
                        <input
                            type="number"
                            className=" border border-black m-2 "
                        />
                        <input
                            type="number"
                            className=" border border-black m-2 "
                        />
                        <input
                            type="number"
                            className=" border border-black m-2 "
                        />
                        <input
                            type="number"
                            className=" border border-black m-2 "
                        />
                        <input
                            type="number"
                            className=" border border-black m-2 "
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export { ExtraMoneyBoxes };
