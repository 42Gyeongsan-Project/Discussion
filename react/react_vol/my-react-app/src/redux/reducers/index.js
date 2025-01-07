import { combineReducers } from "redux";
import checkboxReducer from "./checkboxReducer";
import { friendReducer, profileReducer } from "./friendReducer";

const rootReducer = combineReducers({
  checkboxReducer,
  friendReducer,
  profileReducer
});

export default rootReducer;