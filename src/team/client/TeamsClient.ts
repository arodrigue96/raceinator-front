import { Team } from "../types";
import { TeamsClientStructure } from "./types";

export const apiRestUrl = import.meta.env.VITE_API_URL;

if (!apiRestUrl) {
  throw new Error("Enviroment variable VITE_API_URL does not exist");
}

class TeamsClient implements TeamsClientStructure {
  private readonly apiRestUrl = import.meta.env.VITE_API_URL;

  async getTeams(): Promise<Team[]> {
    const response = await fetch(`${this.apiRestUrl}/teams`);

    if (!response.ok) {
      throw new Error("Failed to load teams");
    }

    const { teams } = (await response.json()) as { teams: Team[] };

    return teams;
  }
}

export default TeamsClient;
