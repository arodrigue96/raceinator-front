import { http, HttpResponse } from "msw";
import teamsMock from "./teamsMock";
import { Team } from "../types";
import { url } from "../client/TeamsClient";

if (!url) {
  throw new Error("Enviroment variable VITE_API_URL does not exist");
}

export const handlers = [
  http.get(`${url}/teams`, () => {
    return HttpResponse.json<{ teams: Team[] }>({
      teams: teamsMock,
    });
  }),
];
