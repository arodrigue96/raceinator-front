import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "../slice/index";

export const store = configureStore({
  reducer: {
    teamsState: teamsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
