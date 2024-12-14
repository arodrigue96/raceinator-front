import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it's rendered and receives 'Aniol' text", () => {
    test("Then it should show a 'Aniol' inside a button", () => {
      const buttonText = /Aniol/i;

      render(<Button children={"Aniol"} />);

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's rendered and receives a 'linkTo'='/home' and 'Test' as text", () => {
    test("Then it should show 'Test' link", () => {
      const linkText = /Test/i;

      render(
        <MemoryRouter>
          <Button children="Test" linkTo="/home" />
        </MemoryRouter>,
      );

      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toBeInTheDocument();
    });
  });
});
