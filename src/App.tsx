import "./App.css";

import { Provider } from "react-redux";
import { store } from "./stateManagement/Redux/store";
import { ReduxComponent } from "./stateManagement/ReduxComponent";

function App() {
  return (
    <Provider store={store}>
      <ReduxComponent />
    </Provider>
  );
}

export default App;
