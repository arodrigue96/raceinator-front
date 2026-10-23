import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import { apiRestUrl } from "../TeamsClient";
import { TeamWithoutId } from "../../types";
import { teamsClient } from "../TeamsClient";

describe("Given the createTeam method of TeamsClient class", () => {
  describe("When it's called and receives the team name 'Aniol's team'", () => {
    test("Then it should return a new team with the team name 'Aniol's team' with an _id", async () => {
      const teamData: TeamWithoutId = {
        name: "Refactor's team",
        ridersNames: ["Aniol Rodriguez", "Erik Riquelme"],
        championshipTitles: 3,
        imageUrl: "https://refacto.com",
        altImageText: "The motorbikes of Aniol's team",
        description: "El equipo de Aniol",
        debutYear: 1996,
        isOfficialTeam: true,
      };

      const newTeam = await teamsClient.createTeam(teamData);

      expect(newTeam).toEqual(expect.objectContaining(teamData));
    });
  });

  describe("When the API answers 400", () => {
    test("Then it should throw 'Invalid team data'", async () => {
      server.use(
        http.post(`${apiRestUrl}/teams`, () =>
          HttpResponse.json({}, { status: 400 }),
        ),
      );

      await expect(
        teamsClient.createTeam({} as TeamWithoutId),
      ).rejects.toThrow("Invalid team data");
    });
  });
});
