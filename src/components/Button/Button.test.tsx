import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it's rendered and receives 'Aniol' text", () => {
    test("Then it should show a 'Aniol' inside a button", () => {
      const buttonText = /Aniol/i;

      render(<Button text={"Aniol"} />);

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
