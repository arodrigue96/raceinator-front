export interface Team {
  _id: string;
  name: string;
  ridersNames: string[];
  championshipTitles: number;
  imageUrl: string;
  altImageText: string;
  description: string;
  debutYear: number;
  isOfficialTeam: boolean;
}

export type TeamWithoutId = Omit<Team, "_id">;

export interface TeamFormData {
  name: string;
  riderName1: string;
  riderName2: string;
  championshipTitles: number;
  isOfficialTeam: boolean;
  imageUrl: string;
  altImageText: string;
  description: string;
  debutYear: number;
}
