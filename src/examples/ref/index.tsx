import React, { useRef, useState } from "react";
import { ComponentB, ComponentBType } from "./ComponentB";

export const RefExampleComponent = function () {
  const ref = useRef<ComponentBType | null>(null);
  const [counter, setCounter] = useState<number>(0);

  const buttonHandler = () => {
    if (ref.current) {
      setCounter(ref.current.getCountData());
    }
  };

  // return <ComponentA />;
  return (
    <React.Fragment>
      <h1>RefExampleComponent</h1>
      <h1>{counter}</h1>
      <button onClick={buttonHandler}>
        Get the component b data in parent component
      </button>
      <ComponentB ref={ref} />
    </React.Fragment>
  );
};
