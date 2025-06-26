import { combineReducers } from "@reduxjs/toolkit";
import App from "./app";
import Todolist from "./todolist";
import planReducer from "./calendars";
const combineRedux = combineReducers({
  App,
  Todolist,
  plans: planReducer,
});

export default combineRedux;
