import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "../team/slice";
import uiSliceReducer from "../uiSlice/index";

export const store = configureStore({
  reducer: {
    teamsState: teamsReducer,
    uiState: uiSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
