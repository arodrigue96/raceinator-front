import { Team } from "../types";

export interface TeamClientStructure {
  getTeams(): Promise<Team[]>;
}
