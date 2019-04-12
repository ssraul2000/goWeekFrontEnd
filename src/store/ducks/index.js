import { combineReducers } from "redux";
import { addBoxReducer, boxReducer } from "./Box";
import { addFileReducer } from "./File";

export default combineReducers({
  addBoxReducer,
  boxReducer,
  addFileReducer
});
