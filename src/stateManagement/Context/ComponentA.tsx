import { ComponentB } from "./ComponentB";
import { useMyContext } from "./contextApi";

export function ComponentA() {
  const data = useMyContext();

  console.log("ComponentA", data);

  return (
    <div>
      ComponentA <ComponentB />
    </div>
  );
}
