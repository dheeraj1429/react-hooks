import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CounterInitialStateInterface {
  counter: number;
}

interface StorePayload<P> {
  payload: P;
  type: string;
}

const counterInitialState: CounterInitialStateInterface = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter -= 1;
    },
    resetCounter: (state) => {
      state.counter = 0;
    },
    setCounter: (state, { payload }: StorePayload<number>) => {
      state.counter = payload;
    },
  },
});

const counterReducer = (state: RootState) => state.counter;

export const counterSelector = createSelector(
  [counterReducer],
  (slice) => slice.counter
);

export const { incrementCounter, decrementCounter, resetCounter, setCounter } =
  counterSlice.actions;
