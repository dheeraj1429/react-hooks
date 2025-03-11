import { useMyContext } from "./contextApi";

export function ComponentB() {
  const data = useMyContext();

  console.log("RENDERING COMPONENT B");

  return (
    <>
      {/* <h1>ComponentB: {data.counter}</h1> */}
      <h1>ComponentB: </h1>
    </>
  );
}
