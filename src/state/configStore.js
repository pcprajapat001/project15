import { createStore, combineReducers } from "redux";

import { categoryReducer } from "./reducer/categoryReducer";
import { gritReducer } from "./reducer/gritReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ categoryReducer, gritReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
