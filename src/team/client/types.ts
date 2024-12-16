import { Team, TeamWithoutId } from "../types";

export interface TeamsClientStructure {
  getTeams(): Promise<Team[]>;
  createTeam(teamData: TeamWithoutId): Promise<Team>;
  deleteTeam(teamId: string): Promise<Team>;
}
