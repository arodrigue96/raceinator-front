import { Team, TeamWithoutId } from "../types";
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

  async createTeam(teamData: TeamWithoutId): Promise<Team> {
    const response = await fetch(`${this.apiRestUrl}/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });

    if (response.status === 409) {
      throw new Error(`A team with ${teamData.name} name already exists`);
    }

    if (!response.ok) {
      throw new Error("Failed to add a new team");
    }

    const { teams } = (await response.json()) as { teams: Team };

    return teams;
  }

  async deleteTeam(teamId: string): Promise<Team> {
    const response = await fetch(`${this.apiRestUrl}/teams/${teamId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete a team");
    }

    const { team } = (await response.json()) as { team: Team };

    return team;
  }
}

export default TeamsClient;
