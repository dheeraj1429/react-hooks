import { useCallback, useState } from "react";

export function UseCallback() {
  const [counter, setCounter] = useState<number>(0);

  const countHandler = useCallback(() => {
    // return setCounter(counter + 1);
    return setCounter((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={countHandler}>Update count</button>
    </div>
  );
}
