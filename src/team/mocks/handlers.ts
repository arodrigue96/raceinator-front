import { http, HttpResponse } from "msw";
import teamsMock, { teamMock1, teamMock2, teamMock3 } from "./teamsMock";
import { Team } from "../types";
import { apiRestUrl } from "../client/TeamsClient";

if (!apiRestUrl) {
  throw new Error("Enviroment variable VITE_API_URL does not exist");
}

export const handlers = [
  http.get(`${apiRestUrl}/teams`, () => {
    return HttpResponse.json<{ teams: Team[] }>({
      teams: teamsMock,
    });
  }),

  http.post(`${apiRestUrl}/teams`, () => {
    return HttpResponse.json<{ teams: Team }>({
      teams: teamMock3,
    });
  }),

  http.delete(`${apiRestUrl}/teams/${teamMock2._id}`, () => {
    return HttpResponse.json<{ team: Team }>({
      team: teamMock2,
    });
  }),

  http.get(`${apiRestUrl}/teams/${teamMock1._id}`, () => {
    return HttpResponse.json<{ team: Team }>({
      team: teamMock1,
    });
  }),
];
