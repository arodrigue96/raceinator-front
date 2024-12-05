import { render, screen } from "@testing-library/react";
import { Team } from "../../team/types";
import TeamCard from "./TeamCard";

describe("Given the TeamCard component", () => {
  describe("When it receives a team with the name 'Aniol's team'", () => {
    test("Then it should show 'Aniol's team' inside a heading", () => {
      const expectedNameText = /Aniol's team/i;

      const teamTest: Team = {
        _id: "",
        name: "Aniol's team",
        ridersNames: ["Gonsalo", "Erik"],
        championshipTitles: 2,
        imageUrl: "",
        altImageText: "",
        description: "",
        debutYear: 2024,
        isOfficialTeam: true,
      };

      render(<TeamCard team={teamTest} />);

      const teamName = screen.getByRole("heading", {
        name: expectedNameText,
      });

      expect(teamName).toBeInTheDocument();
    });
  });
});
