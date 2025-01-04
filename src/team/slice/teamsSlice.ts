import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team } from "../types";

interface TeamsState {
  teams: Team[];
  team: Team | null;
}

const teamsInitialState: TeamsState = {
  teams: [],
  team: null,
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
    loadTeam: (state, action: PayloadAction<Team | null>) => {
      return {
        ...state,
        team: action.payload,
      };
    },
  },
});

export const { loadTeams, loadTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
