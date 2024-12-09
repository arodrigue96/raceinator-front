import { http, HttpResponse } from "msw";
import teamsMock from "./teamsMock";
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
];
