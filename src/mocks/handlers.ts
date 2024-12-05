import { http, HttpResponse } from "msw";
import { Team } from "../team/types";
import teamsMock from "./teamsMock";

const url = import.meta.env.VITE_API_URL;

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
