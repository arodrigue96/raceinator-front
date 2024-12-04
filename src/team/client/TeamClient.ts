import { Team } from "../types";
import { TeamClientStructure } from "./types";

class TeamClient implements TeamClientStructure {
  private url = import.meta.env.VITE_API_URL;

  async getTeams(): Promise<Team[]> {
    const response = await fetch(`${this.url}/teams`);

    const { teams } = (await response.json()) as { teams: Team[] };

    return teams;
  }
}

export default TeamClient;
