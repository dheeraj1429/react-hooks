import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);

  const countHandler = (type: "INC" | "DEC") => {
    const isInc = type === "INC";

    if (isInc) {
      setCounter((prev) => prev + 1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  return { countHandler, counter };
};

export function CustomHook() {
  const { countHandler, counter } = useCounter();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => countHandler("INC")}>INC</button>
      <button onClick={() => countHandler("DEC")}>DEC</button>
    </div>
  );
}
