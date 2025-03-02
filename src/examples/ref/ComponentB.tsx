import React, { useImperativeHandle, useState } from "react";

type ComponentBProps = {};
type ComponentBAttachedMethods = {
  getCountData: () => number;
};

export type ComponentBType = ComponentBAttachedMethods & HTMLDivElement;

export const ComponentB = React.forwardRef<HTMLDivElement, ComponentBProps>(
  (_, ref) => {
    const [counter, setCounter] = useState<number>(0);

    const countHandler = () => {
      setCounter((prev) => prev + 1);
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          getCountData: () => counter,
        } as ComponentBType;
      },
      [counter]
    );

    return (
      <div ref={ref}>
        <h1>Component B</h1>
        <h1>{counter}</h1>
        <button onClick={countHandler}>Counter button</button>
      </div>
    );
  }
);
