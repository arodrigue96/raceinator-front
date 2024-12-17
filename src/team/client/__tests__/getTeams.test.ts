import teamsMock from "../../mocks/teamsMock";
import { teamsClient } from "../TeamsClient";

describe("Given the getTeams method of the TeamsClient class", () => {
  describe("When it's called", () => {
    test("Then it should return a list of teams with team's name 'Aniol's team' and Mario's team", async () => {
      const teams = await teamsClient.getTeams();

      const expectedTeams = teamsMock;

      expect(teams).toStrictEqual(expectedTeams);
    });
  });
});
