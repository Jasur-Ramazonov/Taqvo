import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./mySlice";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
