import { useEffect, useState } from "react";

export function UseEffect() {
  const [counter, setCounter] = useState<number>(0);
  const [shouldCountUpdate, setShouldConteUpdate] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (shouldCountUpdate) {
      timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [shouldCountUpdate]);

  const counterHandler = () => {
    setShouldConteUpdate(!shouldCountUpdate);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={counterHandler}>Start counter</button>
    </div>
  );
}
