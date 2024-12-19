import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team } from "../types";

interface TeamsState {
  teams: Team[];
}

const teamsInitialState: TeamsState = {
  teams: [],
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
  },
});

export const { loadTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
