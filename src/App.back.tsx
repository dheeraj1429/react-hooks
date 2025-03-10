import React from "react";
import "./App.css";

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
  return <React.Fragment></React.Fragment>;
}

export default App;
