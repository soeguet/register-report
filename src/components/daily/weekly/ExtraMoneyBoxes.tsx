import { CoinsLabel } from "./CoinsLabel";

function ExtraMoneyBoxes() {
    return (
        <>
            <div className="flex-col text-nowrap bg-zinc-400">
				<div className="flex">
					<CoinsLabel />
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
				<div className="text-right mr-5">RESULT</div>
            </div>
        </>
    );
}

export { ExtraMoneyBoxes };
