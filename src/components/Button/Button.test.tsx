import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Test' link", () => {
      const buttonText = /Test/i;

      render(
        <MemoryRouter>
          <Button text={"Test"} redirection={""} />
        </MemoryRouter>,
      );

      const button = screen.getByRole("link", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
