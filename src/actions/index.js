import * as types from "./types";
import axios from "../config/api";

export const getConfig = () => async (dispatch) => {
  const response = await axios.get("/configuration");
  dispatch({ type: types.FETCH_CONFIG, payload: response.data });
};

export const getNowPlaying = () => async (dispatch) => {
  const response = await axios.get("/movie/now_playing");
  dispatch({ type: types.FETCH_NOW_PLAYING, payload: response.data });
};

export const getUpcoming = () => async (dispatch) => {
  const response = await axios.get("/movie/upcoming");
  dispatch({ type: types.FETCH_UPCOMING, payload: response.data });
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

export const fetchComplete = () => {
  return { type: types.FETCH_FINISHED };
};

export const getSearchMovie = (name) => async (dispatch) => {
  const response = await axios.get(`/search/movie`, {
    params: {
      query: name,
      language: "en-US",
    },
  });
  dispatch({ type: types.FETCH_SEARCH_MOVIES, payload: response.data });
};

export const toogleHeader = (key) => {
  return { type: types.TOGGLE_HEADER, payload: key };
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await axios.get(id);
  dispatch({ type: types.FETCH_MOVIE, payload: response.data });
};

export const getCredits = (id) => async (dispatch) => {
  const response = await axios.get(`/movie/${id}/credits`);
  dispatch({ type: types.FETCH_CREDITS, payload: response.data });
};

export const getSimilarMovies = (id) => async (dispatch) => {
  const response = await axios.get(`${id}/similar`);
  dispatch({ type: types.FECTH_SIMILAR_MOVIES, payload: response.data });
};
