import teamsMock from "../../../mocks/teamsMock";
import TeamClient from "../TeamClient";

describe("Given the getTeams method of the TeamsClient class", () => {
  describe("When it's called", () => {
    test("Then it should return a list of teams with team's name 'Aniol's team' and Mario's team", async () => {
      const teams = await new TeamClient().getTeams();

      const expectedTeams = [...teamsMock];

      expect(teams).toStrictEqual(expectedTeams);
    });
  });
});
