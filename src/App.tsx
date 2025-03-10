import React from "react";
import "./App.css";
import { ComponentA } from "./stateManagement/Context/ComponentA";
import { MyContextProvider } from "./stateManagement/Context/contextApi";

function App() {
  return (
    <React.Fragment>
      <MyContextProvider>
        <ComponentA />
      </MyContextProvider>
    </React.Fragment>
  );
}

export default App;
