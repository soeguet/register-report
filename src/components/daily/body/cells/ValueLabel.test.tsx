import { App } from "../../../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe } from "vitest";

describe("valueLabel", () => {
    test("should render value label", () => {
        render(<App />);
        const valueLabel = screen.getByTestId("value-label-200_euro");
        expect(valueLabel).toBeInTheDocument();
    });

    test("display correct value after change", async () => {
        render(<App />);
        const input = screen.getByTestId("200_euro-1");
        await userEvent.type(input, "19");
        const valueLabel = screen.getByTestId("value-label-200_euro");
        expect(valueLabel).toHaveTextContent("3.800,00 €");
    });

    test("display correct value after change of multiple", async () => {
        render(<App />);
        const input = screen.getByTestId("200_euro-1");
        await userEvent.type(input, "19");
        const input2 = screen.getByTestId("200_euro-2");
        await userEvent.type(input2, "19");
        const valueLabel = screen.getByTestId("value-label-200_euro");
        expect(valueLabel).toHaveTextContent("7.600,00 €");
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
        const valueLabel = screen.getByTestId("value-label-200_euro");
        expect(valueLabel).toHaveTextContent("19.000,00 €");
    });
});
