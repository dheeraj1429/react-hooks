import { Component } from "./Component";
import { ContextProvider } from "./context";

export const WrappedComponent = () => {
  return (
    <ContextProvider>
      <Component />
    </ContextProvider>
  );
};
