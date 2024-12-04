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
