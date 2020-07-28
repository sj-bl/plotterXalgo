import React from "react";
import PlotterConfig from "../components/plotterConfig/plotterConfig.component";
import Canvas from "../components/canvas/canvas.component";
import UserInput from "../components/userInput/userInput.component";
import { Block } from "baseui/block";

export const Plotter = () => {
  return (
    <div className="plotter-container" style={{ marginTop: 0 }}>
      <Block marginTop="4rem"></Block>
      <PlotterConfig />
      <Canvas />
    </div>
  );
};
