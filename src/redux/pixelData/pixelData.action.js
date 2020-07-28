import { PixelActionType } from "./pixelData.type";
export const updatePixel = (data) => ({
  type: PixelActionType.UPDATE_PIXEL,
  payload: data,
});
export const clearGrid = () => ({
  type: PixelActionType.CLEAR_GRID,
});
