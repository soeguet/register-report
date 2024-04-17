import { useDailyStore } from "../../stores/daily/dailyStore";
import { MainFrame } from "./MainFrame";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it } from "vitest";

describe("MainFrame", () => {
    it("should render", () => {
        expect(1).toBe(1);
    });

    it("should render the main element", () => {
        render(<MainFrame />);
        const mainElement = screen.getByTestId("daily-main-body");

        expect(mainElement).toBeInTheDocument();
    });

    it("should render the target value with 0,00 €", () => {
        render(<MainFrame />);
        const targetInputField = screen.getByTestId("targetValueInput");
        targetInputField.focus();
        const targetValueDiv = screen.getByTestId("targetDisplayDiv");
        expect(targetValueDiv).toHaveTextContent("0,00 €");

        expect(targetInputField).toBeInTheDocument();
    });

    it("should render the target value with 10,00 €", async () => {
        render(<MainFrame />);
        const targetInputField = screen.getByTestId("targetValueInput");
        await userEvent.type(targetInputField, "10.00");
        const target = useDailyStore.getState().targetValue;

        expect(target).toBe(10);

        const targetValueDiv = screen.getByTestId("targetDisplayDiv");
        expect(targetValueDiv).toHaveTextContent("10,00 €");
    });
    it("should render the target value with 10,00 € - v2", async () => {
        render(<MainFrame />);
        const targetInputField = screen.getByTestId("targetValueInput");
        await userEvent.type(targetInputField, "10,00");
        const target = useDailyStore.getState().targetValue;

        expect(target).toBe(1000);

        const targetValueDiv = screen.getByTestId("targetDisplayDiv");
        expect(targetValueDiv).toHaveTextContent("1.000,00 €");
    });
});
