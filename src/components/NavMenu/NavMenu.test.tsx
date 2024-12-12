import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavMenu from "./NavMenu";

describe("Given the NavMenu component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Home' link", () => {
      const homeLinkText = /Home/i;

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const homeLink = screen.getByRole("link", {
        name: homeLinkText,
      });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show a 'Add new team' link", () => {
      const addNewTeamLinkText = /Add new team/i;

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const addNewTeamLink = screen.getByRole("link", {
        name: addNewTeamLinkText,
      });

      expect(addNewTeamLink).toBeInTheDocument();
    });
  });
});
