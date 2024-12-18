import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team } from "../types";

interface TeamsState {
  teams: Team[];
  team: Team;
}

const teamsInitialState: TeamsState = {
  teams: [],
  team: {
    _id: "",
    name: "",
    ridersNames: ["", ""],
    debutYear: 0,
    isOfficialTeam: false,
    championshipTitles: 0,
    imageUrl: "",
    altImageText: "",
    description: "",
  },
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState: teamsInitialState,
  reducers: {
    loadTeams: (state, action: PayloadAction<Team[]>) => {
      return {
        ...state,
        teams: action.payload,
      };
    },
    loadTeam: (state, action: PayloadAction<Team>) => {
      return {
        ...state,
        team: action.payload,
      };
    },
  },
});

export const { loadTeams, loadTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
