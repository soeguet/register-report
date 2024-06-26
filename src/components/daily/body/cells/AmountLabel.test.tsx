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

    test("display correct value after change of multiple", async () => {
        render(<App />);
        const input = screen.getByTestId("200_euro-1");
        await userEvent.type(input, "19");
        const input2 = screen.getByTestId("200_euro-2");
        await userEvent.type(input2, "19");
        const amountLabel = screen.getByTestId("amount-label-200_euro");
        expect(amountLabel).toHaveTextContent("38 x");
    });

    test("display correct value after change of multiple", async () => {
        render(<App />);
        const input = screen.getByTestId("200_euro-0");
        await userEvent.type(input, "19");
        const input2 = screen.getByTestId("200_euro-2");
        await userEvent.type(input2, "19");
        const input3 = screen.getByTestId("200_euro-3");
        await userEvent.type(input3, "19");
        const input4 = screen.getByTestId("200_euro-4");
        await userEvent.type(input4, "19");
        const input5 = screen.getByTestId("200_euro-1");
        await userEvent.type(input5, "19");
        const amountLabel = screen.getByTestId("amount-label-200_euro");
        expect(amountLabel).toHaveTextContent("95 x");
    });
});
