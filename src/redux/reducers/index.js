import { combineReducers } from "redux";
import user from "./user.reducer";
import utils from "./utils.reducer";

const combinedReducers = combineReducers({ user, utils });

export default combinedReducers;
