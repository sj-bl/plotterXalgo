import React from "react";
import { Plotter } from "./pages/plotter.page";
// import { PointTable } from "./pages/table.page";
import UserInput from "./components/userInput/userInput.component";
import "./app.scss";
import { Block } from "baseui/block";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="flex_item user-input">
          <UserInput />
        </div>
        <div className="flex_item">
          <Plotter />
        </div>
      </div>
      <Block margin="1rem 0">
        <div className="flex"></div>
      </Block>
    </div>
  );
}

export default App;
