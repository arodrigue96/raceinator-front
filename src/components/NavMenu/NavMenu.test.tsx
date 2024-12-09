import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavMenu from "./NavMenu";

describe("Given the NavMenu component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'Go to home page' alternative text", () => {
      const homeAltImageText = /Go to home page/i;

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const homeAltImage = screen.getByAltText(homeAltImageText);

      expect(homeAltImage).toBeInTheDocument();
    });

    test("Then it shoul show an image with 'Go to add new team page' alternative text", () => {
      const addNewTeamAltImageText = /Go to add new team page/i;

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const addNewTeamAltImage = screen.getByAltText(addNewTeamAltImageText);

      expect(addNewTeamAltImage).toBeInTheDocument();
    });
  });
});
