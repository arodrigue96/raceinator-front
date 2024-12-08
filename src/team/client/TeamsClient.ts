import { Team } from "../types";
import { TeamsClientStructure } from "./types";

export const apiRestUrl = import.meta.env.VITE_API_URL;

if (!apiRestUrl) {
  throw new Error("Enviroment variable VITE_API_URL does not exist");
}

class TeamsClient implements TeamsClientStructure {
  private readonly url = import.meta.env.VITE_API_URL;

  async getTeams(): Promise<Team[]> {
    const response = await fetch(`${this.url}/teams`);

    const { teams } = (await response.json()) as { teams: Team[] };

    return teams;
  }
}

export default TeamsClient;
