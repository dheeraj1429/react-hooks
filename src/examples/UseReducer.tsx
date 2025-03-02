import { useReducer } from "react";

interface StateInterface {
  counter: number;
}

type Actions =
  | { type: "INC" }
  | { type: "DEC" }
  | { type: "RESET" }
  | { type: "SET"; payload: number };

const reducer = (state: StateInterface, action: Actions) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 0 };
    case "SET":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>INC</button>
      <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      <button onClick={() => dispatch({ type: "SET", payload: 10 })}>
        SET
      </button>
    </div>
  );
}
