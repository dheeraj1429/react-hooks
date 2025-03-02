import { useState } from "react";

export function UseState() {
  const [counter, setCounter] = useState<number>(0);

  const counterHandler = (type: "INC" | "DEC" = "INC") => {
    const isInc = type === "INC";
    if (isInc) {
      setCounter((prev) => prev + 1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => counterHandler("INC")}>INC</button>
      <button onClick={() => counterHandler("DEC")}>DEC</button>
    </div>
  );
}
