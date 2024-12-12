import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router";

describe("Given the App component", () => {
  describe("When rendered", () => {
    test("Then it should show the website logo inside with the alternative text 'Raceinator logo'", () => {
      const logoAltText = /raceinator logo/i;

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const websiteLogo = screen.getByAltText(logoAltText);

      expect(websiteLogo).toBeInTheDocument();
    });

    test("Then it should show 'Raceinator' as text", () => {
      const titleText = /raceinator/i;

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const title = screen.getByText(titleText);

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a 'Home' link", () => {
      const homeLinkText = /Home/i;

      render(
        <MemoryRouter>
          <App />
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
          <App />
        </MemoryRouter>,
      );

      const addNewTeamLink = screen.getByRole("link", {
        name: addNewTeamLinkText,
      });

      expect(addNewTeamLink).toBeInTheDocument();
    });
  });
});
