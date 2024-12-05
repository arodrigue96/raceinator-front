import { render, screen } from "@testing-library/react";
import TeamsList from "./TeamsList";
import teamsMock from "../../mocks/teamsMock";

describe("Given the TeamsList component", () => {
  describe("When it renders 2 teams with the title 'Aniol's team' and 'Mario's team'", () => {
    test("Then it should show the team's name 'Aniol's team' and 'Mario's team' inside their headings", () => {
      const expectedTeamNameText1 = /Aniol's team/i;
      const expectedTeamNameText2 = /Mario's team/i;

      render(<TeamsList teams={teamsMock} />);

      const teamNameMock1 = screen.getByRole("heading", {
        name: expectedTeamNameText1,
      });

      const teamNameMock2 = screen.getByRole("heading", {
        name: expectedTeamNameText2,
      });

      expect(teamNameMock1).toBeInTheDocument();
      expect(teamNameMock2).toBeInTheDocument();
    });
  });
});
