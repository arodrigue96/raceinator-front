import { render, screen } from "@testing-library/react";
import TeamsPage from "./TeamsPage";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { MemoryRouter } from "react-router";

describe("Given the TeamsPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a spinner with 'Loading' text", () => {
      const expectedLoaderText = /Loading Spinner/i;

      render(
        <Provider store={store}>
          <TeamsPage />
        </Provider>,
      );

      const loader = screen.getByLabelText(expectedLoaderText);

      expect(loader).toBeInTheDocument();
    });

    test("Then it should show 'Teams' inside a heading", () => {
      const titleText = /teams/i;

      render(
        <Provider store={store}>
          <TeamsPage />
        </Provider>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: titleText,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show the images 'The motorbikes of Aniol's team' and 'The motorbikes of Mario's team' alternatives texts", async () => {
      const expectedTeam1AltText = /The motorbikes of Aniol's team/i;
      const expectedTeam2AltText = /The motorbikes of Mario's team/i;

      render(
        <MemoryRouter>
          <Provider store={store}>
            <TeamsPage />
          </Provider>
        </MemoryRouter>,
      );

      const team1AlternativeText =
        await screen.findByAltText(expectedTeam1AltText);
      const team2AlternativeText =
        await screen.findByAltText(expectedTeam2AltText);

      expect(team1AlternativeText).toBeInTheDocument();
      expect(team2AlternativeText).toBeInTheDocument();
    });

    test("Then it should show the team's name 'Aniol's team' and 'Mario's team' inside their headings", async () => {
      const expectedTeamNameText1 = /Aniol's team/i;
      const expectedTeamNameText2 = /Mario's team/i;

      render(
        <MemoryRouter>
          <Provider store={store}>
            <TeamsPage />
          </Provider>
        </MemoryRouter>,
      );

      const teamName1 = await screen.findByRole("heading", {
        name: expectedTeamNameText1,
      });

      const teamName2 = await screen.findByRole("heading", {
        name: expectedTeamNameText2,
      });

      expect(teamName1).toBeInTheDocument();
      expect(teamName2).toBeInTheDocument();
    });
  });
});
