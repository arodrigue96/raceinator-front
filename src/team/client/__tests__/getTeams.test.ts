import teamsMock from "../../mocks/teamsMock";
import TeamsClient from "../TeamsClient";

describe("Given the getTeams method of the TeamsClient class", () => {
  describe("When it's called", () => {
    test("Then it should return a list of teams with team's name 'Aniol's team' and Mario's team", async () => {
      const teams = await new TeamsClient().getTeams();

      const expectedTeams = teamsMock;

      expect(teams).toStrictEqual(expectedTeams);
    });
  });
});
