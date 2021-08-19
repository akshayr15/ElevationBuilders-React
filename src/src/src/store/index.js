import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import configReducer from "./config";

const rootReducer = combineReducers({
  config: configReducer,
});

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([thunk]));

export default store;
