import { PlotterActionType } from "./plotter.type";

export const updateGrid = (config) => ({
  type: PlotterActionType.UPDATE_GRID,
  payload: config,
});
