import { CoinsLabel } from "./CoinsLabel";

function ExtraMoneyRolls() {
    return (
        <>
            <div className="flex-col text-nowrap bg-cyan-300">
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

export { ExtraMoneyRolls };
