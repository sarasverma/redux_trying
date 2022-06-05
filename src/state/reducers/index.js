import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

// making all the reducers into single file.
const reducers = combineReducers({ amount: amountReducer });

export default reducers;
