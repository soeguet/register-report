import { ValueLabel } from "../cells/ValueLabel.tsx";

function ValueColumn() {
    return (
        <>
            <div className="p-2">
                <ValueLabel nominal={"200_euro"} />
                <ValueLabel nominal={"100_euro"} />
                <ValueLabel nominal={"50_euro"} />
                <ValueLabel nominal={"20_euro"} />
                <ValueLabel nominal={"10_euro"} />
                <ValueLabel nominal={"5_euro"} />
                <ValueLabel nominal={"2_euro"} />
                <ValueLabel nominal={"1_euro"} />
                <ValueLabel nominal={"50_cent"} />
                <ValueLabel nominal={"20_cent"} />
                <ValueLabel nominal={"10_cent"} />
                <ValueLabel nominal={"5_cent"} />
                <ValueLabel nominal={"2_cent"} />
                <ValueLabel nominal={"1_cent"} />
            </div>
        </>
    );
}

export { ValueColumn };