import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavMenu from "./NavMenu";

describe("Given the NavMenu component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'Redirect to home page' alternative text", () => {
      const homeAltImageText = /redirect to home page/i;

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const homeAltImage = screen.getByAltText(homeAltImageText);

      expect(homeAltImage).toBeInTheDocument();
    });
  });
});
