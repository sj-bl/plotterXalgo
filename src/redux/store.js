import { createStore } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./rootReducer";
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
