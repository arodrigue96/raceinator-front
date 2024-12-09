import { Team } from "../types";

export const teamMock1: Team = {
  _id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
  name: "Aniol's team",
  ridersNames: ["Aniol Rodriguez", "Erik Riquelme"],
  championshipTitles: 3,
  imageUrl: "",
  altImageText: "The motorbikes of Aniol's team",
  description: "",
  debutYear: 1996,
  isOfficialTeam: true,
};

export const teamMock2: Team = {
  _id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
  name: "Mario's team",
  ridersNames: ["Mario Gonzalez", "Refactor Gonsalo"],
  championshipTitles: 0,
  imageUrl: "",
  altImageText: "The motorbikes of Mario's team",
  description: "",
  debutYear: 2024,
  isOfficialTeam: true,
};

const teamsMock: Team[] = [teamMock1, teamMock2];

export default teamsMock;
