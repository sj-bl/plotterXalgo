import { combineReducers } from "redux";
import { plotterConfigReducer } from "./plotterConfig/plotter.reducer";
import { pixelReducer } from "./pixelData/pixelData.reducer";

const rootReducer = combineReducers({
  plotter: plotterConfigReducer,
  pixelData: pixelReducer,
});
export default rootReducer;
