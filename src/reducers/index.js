import { combineReducers } from "redux";
import config from "./configuration";
import movies from "./movies";
import genre from "./genre";
import movie from "./movie";

export default combineReducers({ config, movies, genre, movie });
