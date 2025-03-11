import { useMyContext } from "./contextApi";

export function ComponentA() {
  const data = useMyContext();

  return (
    <>
      <h1>ComponentA: {data.counter}</h1>
      <button onClick={() => data.handlerChangeCounter()}>Update</button>
    </>
  );
}
