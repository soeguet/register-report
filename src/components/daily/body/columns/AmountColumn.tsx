import { AmountLabel } from "../cells/AmountLabel.tsx";

function AmountColumn() {
    return (
        <>
            <div className="p-2">
                <AmountLabel nominal={"200_euro"} />
                <AmountLabel nominal={"100_euro"} />
                <AmountLabel nominal={"50_euro"} />
                <AmountLabel nominal={"20_euro"} />
                <AmountLabel nominal={"10_euro"} />
                <AmountLabel nominal={"5_euro"} />
                <AmountLabel nominal={"2_euro"} />
                <AmountLabel nominal={"1_euro"} />
                <AmountLabel nominal={"50_cent"} />
                <AmountLabel nominal={"20_cent"} />
                <AmountLabel nominal={"10_cent"} />
                <AmountLabel nominal={"5_cent"} />
                <AmountLabel nominal={"2_cent"} />
                <AmountLabel nominal={"1_cent"} />
            </div>
        </>
    );
}

export { AmountColumn };