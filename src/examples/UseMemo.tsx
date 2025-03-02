import { useMemo, useState } from "react";

export function UseMemo() {
  const [counter, setCounter] = useState<number>(0);

  const calculateCount = useMemo(() => {
    return counter * 10;
  }, [counter]);

  const updateCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{calculateCount}</h1>
      <button onClick={updateCounter}>Calculate count</button>
    </div>
  );
}
