import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
