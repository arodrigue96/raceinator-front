import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RedirectionButton from "./RedirectionButton";

describe("Given the RedirectionButton component", () => {
  describe("When it's rendered and receives 'Test' text", () => {
    test("Then it should show a 'Test' link", () => {
      const buttonText = /Test/i;

      render(
        <MemoryRouter>
          <RedirectionButton text={"Test"} redirection={""} />
        </MemoryRouter>,
      );

      const button = screen.getByRole("link", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
