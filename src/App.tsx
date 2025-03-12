import React from "react";
import "./App.css";
import ComponentA from "./Hoc/ComponentA";

function App() {
  return (
    <React.Fragment>
      <ComponentA isLoading={true} />
    </React.Fragment>
  );
}

export default App;
