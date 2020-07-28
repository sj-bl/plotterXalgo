import React from "react";
import { connect } from "react-redux";

const dda = (X0, Y0, X1, Y1) => {
  // console.log("line algo", X0, Y0, X1, Y1);
  const coOrdinates = [];

  let dx = X1 - X0;
  let dy = Y1 - Y0;
  let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
  let Xinc = dx / steps;
  let Yinc = dy / steps;
  let X = X0;
  let Y = Y0;
  for (let i = 0; i < steps; i++) {
    coOrdinates.push({
      x: Math.round(X),
      y: Math.round(Y),
    });

    X += Xinc * 1;
    Y += Yinc * 1;
  }
  return coOrdinates;
};

export default dda;
