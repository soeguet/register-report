import { MainFrame } from "./MainFrame";
import { render, screen } from "@testing-library/react";

describe("MainFrame", () => {
    it("should render", () => {
        expect(1).toBe(1);
    });

    it("should render the main element", () => {
        render(<MainFrame />);
        const mainElement = screen.getByTestId("daily-main-body");

        expect(mainElement).toBeInTheDocument();
    });
});
