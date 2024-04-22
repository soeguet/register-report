import { App } from "../../../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe } from "vitest";

describe("valueLabel", () => {
    test("should render correct values", async() => {
        render(<App />);

		const targetValueInput = screen.getByTestId("targetValueInput");
		await userEvent.type(targetValueInput, "1000.78");

		const valueLabel = screen.getByTestId("200_euro-0");
		await userEvent.type(valueLabel, "9");

		const targetDisplyDiv = screen.getByTestId("targetDisplayDiv");
		expect(targetDisplyDiv).toHaveTextContent("1.000,78 €");

		const totalValueDiv = screen.getByTestId("totalDisplayDiv");
		expect(totalValueDiv).toHaveTextContent("1.800,00 €");

		const diffValueDiv = screen.getByTestId("diffDisplayDiv");
		expect(diffValueDiv).toHaveTextContent("799,22 €");
    });

    test("should render correct values - more complex", async() => {
        render(<App />);

		const targetValueInput = screen.getByTestId("targetValueInput");
		await userEvent.type(targetValueInput, "1000.78");

		const valueLabel = screen.getByTestId("200_euro-0");
		await userEvent.type(valueLabel, "9");

		const valueLabel2 = screen.getByTestId("100_euro-1");
		await userEvent.type(valueLabel2, "3");

		const valueLabel3 = screen.getByTestId("50_euro-2");
		await userEvent.type(valueLabel3, "1");

		const valueLabel4 = screen.getByTestId("20_euro-3");
		await userEvent.type(valueLabel4, "7");

		const valueLabel5 = screen.getByTestId("10_euro-4");
		await userEvent.type(valueLabel5, "2");

		const valueLabel6 = screen.getByTestId("5_euro-0");
		await userEvent.type(valueLabel6, "1");

		const valueLabel7 = screen.getByTestId("2_euro-1");
		await userEvent.type(valueLabel7, "1");

		const valueLabel8 = screen.getByTestId("1_euro-2");
		await userEvent.type(valueLabel8, "1");

		const valueLabel9 = screen.getByTestId("50_cent-3");
		await userEvent.type(valueLabel9, "1");

		const valueLabel10 = screen.getByTestId("20_cent-4");
		await userEvent.type(valueLabel10, "1");

		const valueLabel11 = screen.getByTestId("10_cent-0");
		await userEvent.type(valueLabel11, "1");

		const valueLabel12 = screen.getByTestId("5_cent-1");
		await userEvent.type(valueLabel12, "1");

		const valueLabel13 = screen.getByTestId("2_cent-2");
		await userEvent.type(valueLabel13, "1");

		const valueLabel14 = screen.getByTestId("1_cent-3");
		await userEvent.type(valueLabel14, "1");

		const targetDisplyDiv = screen.getByTestId("targetDisplayDiv");
		expect(targetDisplyDiv).toHaveTextContent("1.000,78 €");

		const totalValueDiv = screen.getByTestId("totalDisplayDiv");
		expect(totalValueDiv).toHaveTextContent("2.318,88 €");

		const diffValueDiv = screen.getByTestId("diffDisplayDiv");
		expect(diffValueDiv).toHaveTextContent("1.318,10 €");
    });

});
