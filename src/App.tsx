import React from "react";
import "./App.css";
import { ComponentA } from "./stateManagement/Context/ComponentA";
import { MyContextProvider } from "./stateManagement/Context/contextApi";
import { ComponentB } from "./stateManagement/Context/ComponentB";

function App() {
  return (
    <React.Fragment>
      <MyContextProvider>
        <ComponentA />
        <ComponentB />
      </MyContextProvider>
    </React.Fragment>
  );
}

export default App;
