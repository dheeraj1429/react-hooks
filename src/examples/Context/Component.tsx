import { useContextHook } from "./context";

export function Component() {
  const { name, age, place, changeName } = useContextHook();

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{place}</h1>
      <button onClick={() => changeName("Dheeraj")}>Change name</button>
    </div>
  );
}
