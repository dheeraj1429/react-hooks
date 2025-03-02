import React from "react";
import "./App.css";
import {
  counterSelector,
  decrementCounter,
  incrementCounter,
  resetCounter,
  setCounter,
} from "./store/counterSlice";
import { useAppSelector, useAppDispatch } from "./store/store";

// Both DSA QUESTIONS
// const b = [9, 8, 5, 11, 20]; // output. -> 11.

// // We can add the pointers.
// // [9, 8, 5, 11, 20]

// const findElement = (nums: number[]): number => {
//   const n = nums.length;
//   if (n < 3) return -1;

//   const prefixMax = Array(n).fill(-Infinity);
//   const suffixMin = Array(n).fill(Infinity);

//   for (let i = 1; i < n; i++) {
//     prefixMax[i] = Math.max(prefixMax[i - 1], nums[i - 1]);
//   }

//   for (let i = n - 2; i >= 0; i--) {
//     suffixMin[i] = Math.min(suffixMin[i + 1], nums[i + 1]);
//   }

//   console.log(prefixMax, suffixMin);

//   for (let i = 1; i < n - 1; i++) {
//     if (nums[i] > prefixMax[i] && nums[i] < suffixMin[i]) {
//       return nums[i];
//     }
//   }

//   return -1;
// };

// console.log(findElement(b));

// find pares of two elements
// const a = [1, 5, 2, 4, -3, 6, 9];
// const findP = function (nums: Array<number>, target: number) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const comp = target - nums[i];

//     if (map.has(comp)) {
//       return [map.get(comp), i];
//     }

//     map.set(nums[i], i);
//   }
// };

// findP(a, 9);

function App() {
  const counter = useAppSelector(counterSelector);
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <h1>Hello from react js {counter}</h1>
      <button onClick={() => dispatch(incrementCounter())}>INC</button>
      <button onClick={() => dispatch(decrementCounter())}>DEC</button>
      <button onClick={() => dispatch(resetCounter())}>RESET</button>
      <button onClick={() => dispatch(setCounter(10))}>SET</button>
    </React.Fragment>
  );
}

export default App;
