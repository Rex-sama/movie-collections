import * as types from "./types";
import axios from "../config/api";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

export const getConfig = () => async (dispatch) => {
  const response = await axios.get("/configuration");
  dispatch({ type: types.FETCH_CONFIG, payload: response.data });
};

export const getNowPlaying = () => async (dispatch) => {
  const response = await axios.get("/movie/now_playing");
  dispatch({ type: types.FETCH_NOW_PLAYING, payload: response.data });
};

export const getPopular = () => async (dispatch) => {
  const response = await axios.get("/movie/popular");
  dispatch({ type: types.FETCH_POPULAR, payload: response.data });
};

export const getTopRated = () => async (dispatch) => {
  const response = await axios.get("/movie/top_rated");
  dispatch({ type: types.FETCH_TOP_RATED, payload: response.data });
};

export const getGenre = () => async (dispatch) => {
  const response = await axios.get("/genre/movie/list");
  dispatch({ type: types.FETCH_GENRES, payload: response.data });
};
