import { PixelActionType } from "./pixelData.type";

const INITIAL_STATE = {
  pixels: [],
};

export const pixelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PixelActionType.UPDATE_PIXEL:
      return { pixels: action.payload };
    case PixelActionType.CLEAR_GRID:
      return { pixels: [] };

    default:
      return state;
  }
};
