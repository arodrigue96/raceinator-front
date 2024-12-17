import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
}

const loadingInitialState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: loadingInitialState,
  reducers: {
    displayLoading: (state): UiState => {
      return {
        ...state,
        isLoading: true,
      };
    },
    hideLoading: (state): UiState => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const { displayLoading, hideLoading } = uiSlice.actions;
export default uiSlice.reducer;
