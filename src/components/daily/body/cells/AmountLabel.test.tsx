import { App } from "../../../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe } from "vitest";

describe("AmountLabel", () => {
    test("should render amount label", () => {
        render(<App />);
        const amountLabel = screen.getByTestId("amount-label-200_euro");
        expect(amountLabel).toBeInTheDocument();
    });

    test("display correct value after change", async () => {
        render(<App />);
        const input = screen.getByTestId("200_euro-1");
        await userEvent.type(input, "19");
        const amountLabel = screen.getByTestId("amount-label-200_euro");
        expect(amountLabel).toHaveTextContent("19 x");
    });
});
