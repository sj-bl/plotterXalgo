const { PlotterActionType } = require("./plotter.type");

const INITIAL_STATE = {
  plotterConfig: {
    gridSize: 64,
    duration: 1000,
    color: "#000000",
  },
};

export const plotterConfigReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlotterActionType.UPDATE_GRID:
      return { ...state, plotterConfig: action.payload };

    default:
      return state;
  }
};
