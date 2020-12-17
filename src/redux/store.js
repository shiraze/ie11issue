import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import mainPageReducer from "./mainPage/reducer";

import thunk from "redux-thunk";

const appReducer = combineReducers({
  mainPage: mainPageReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = window.devToolsExtension
  ? createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  : createStore(rootReducer, applyMiddleware(thunk));

export default store;
