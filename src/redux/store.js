import { createStore, combineReducers, applyMiddleware } from "redux";

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

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
