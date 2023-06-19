import React from "react";
import "./style/style.css";
import Main from "./screen/main";
import { Provider } from "react-redux";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <Main />;
    </Provider>
  );
}

export default App;
