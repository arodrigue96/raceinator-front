import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "../team/slice";

export const store = configureStore({
  reducer: {
    teamsState: teamsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
