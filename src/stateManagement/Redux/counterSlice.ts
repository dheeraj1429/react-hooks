import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    counter: 10,
  },
  reducers: {
    updateCounter: (state, payload) => {
      // console.log(payload);
      state.counter = payload.payload.counter;
    },
  },
});

export const { updateCounter } = counterSlice.actions;
