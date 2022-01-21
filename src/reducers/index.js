import { combineReducers } from "redux";
import config from "./configuration";
import movies from "./movies";
import genre from "./genre";

export default combineReducers({ config, movies, genre });
