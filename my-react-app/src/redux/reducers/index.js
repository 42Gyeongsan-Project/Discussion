import { combineReducers } from "redux";
import checkboxReducer from "./checkboxReducer";
import friendReducer from "./friendReducer";

const rootReducer = combineReducers({
  checkboxReducer,
  friendReducer
});

export default rootReducer;