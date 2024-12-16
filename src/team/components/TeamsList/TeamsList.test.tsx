import { render, screen } from "@testing-library/react";
import TeamsList from "./TeamsList";
import teamsMock from "../../mocks/teamsMock";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given the TeamsList component", () => {
  describe("When it receives a list of teams with 'Aniol's team' and 'Mario's team'", () => {
    test("Then it should show the images 'The motorbikes of Aniol's team' and 'The motorbikes of Mario's team' alternatives texts", () => {
      const expectedTeam1AltText = /The motorbikes of Aniol's team/i;
      const expectedTeam2AltText = /The motorbikes of Mario's team/i;

      render(
        <Provider store={store}>
          <TeamsList teams={teamsMock} />
        </Provider>,
      );

      const team1AlternativeText = screen.getByAltText(expectedTeam1AltText);
      const team2AlternativeText = screen.getByAltText(expectedTeam2AltText);

      expect(team1AlternativeText).toBeInTheDocument();
      expect(team2AlternativeText).toBeInTheDocument();
    });

    test("Then it should show the team's name 'Aniol's team' and 'Mario's team' inside their headings", () => {
      const expectedTeamNameText1 = /Aniol's team/i;
      const expectedTeamNameText2 = /Mario's team/i;

      render(
        <Provider store={store}>
          <TeamsList teams={teamsMock} />
        </Provider>,
      );

      const teamName1 = screen.getByRole("heading", {
        name: expectedTeamNameText1,
      });

      const teamName2 = screen.getByRole("heading", {
        name: expectedTeamNameText2,
      });

      expect(teamName1).toBeInTheDocument();
      expect(teamName2).toBeInTheDocument();
    });
  });
});
