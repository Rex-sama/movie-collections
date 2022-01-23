import { combineReducers } from "redux";
import config from "./configuration";
import movies from "./movies";
import genre from "./genre";
import movie from "./movie";
import tvShows from "./tvshows";
import selected_Show from "./tvshow";

export default combineReducers({
  config,
  movies,
  genre,
  movie,
  tvShows,
  selected_Show,
});
