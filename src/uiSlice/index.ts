import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isLoading: boolean;
}

const loadingInitialState: uiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: loadingInitialState,
  reducers: {
    displayLoading: (state): uiState => {
      return {
        ...state,
        isLoading: true,
      };
    },
    hideLoading: (state): uiState => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const { displayLoading, hideLoading } = uiSlice.actions;
export default uiSlice.reducer;
