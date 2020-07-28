import React from "react";
import ReactDOM from "react-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled, DarkTheme } from "baseui";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);
