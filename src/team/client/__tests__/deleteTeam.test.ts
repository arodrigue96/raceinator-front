import { teamMock3 } from "../../mocks/teamsMock";
import TeamsClient from "../TeamsClient";

describe("Given the deleteTeam of the TeamsClient class", () => {
  describe("When is called with the team 'Aniol's team' with the ID '36b8f84d-df4e-4d49-b662-bcde71a8764g'", () => {
    test("Then it should return the 'Aniol's team'", async () => {
      const deletedTeam = await new TeamsClient().deleteTeam(
        "36b8f84d-df4e-4d49-b662-bcde71a8764g",
      );

      expect(deletedTeam).toEqual(teamMock3);
    });
  });
});