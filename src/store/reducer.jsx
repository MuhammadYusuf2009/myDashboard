import { combineReducers } from "@reduxjs/toolkit";
import App from "./app";
import Todolist from "./todolist";

const combineRedux = combineReducers({
  App,
  Todolist,
});

export default combineRedux;
