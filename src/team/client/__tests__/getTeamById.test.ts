import { teamMock1 } from "../../mocks/teamsMock";
import { teamsClient } from "../TeamsClient";

describe("Given the getTeamById of the TeamsClient class", () => {
  describe("When is called with the team 'Aniol's team' with the ID '36b8f84d-df4e-4d49-b662-bcde71a8764g'", () => {
    test("Then it should return the 'Aniol's team'", async () => {
      const team = await teamsClient.getTeamById(teamMock1._id);

      expect(team).toEqual(teamMock1);
    });
  });
});
