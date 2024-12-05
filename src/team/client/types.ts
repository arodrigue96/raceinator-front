import { Team } from "../types";

export interface TeamsClientStructure {
  getTeams(): Promise<Team[]>;
}
