import { render, screen } from "@testing-library/react";
import TeamCard from "./TeamCard";
import { teamMock1 } from "../../mocks/teamsMock";

describe("Given the TeamCard component", () => {
  describe("When it receives a team with the name 'Aniol's team'", () => {
    test("Then it should show 'Aniol's team' inside a heading", () => {
      const expectedNameText = /Aniol's team/i;

      render(<TeamCard team={teamMock1} />);

      const teamName = screen.getByRole("heading", {
        name: expectedNameText,
      });

      expect(teamName).toBeInTheDocument();
    });
  });
});
