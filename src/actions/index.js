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

export const getSearchInput = (name) => {
  return { type: types.FETCH_SEARCH_KEYWORD, payload: name };
};

export const toogleHeader = (key) => {
  return { type: types.TOGGLE_HEADER, payload: key };
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await axios.get(id, {
    params: {
      append_to_response: "videos",
    },
  });
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

export const getTvShows = () => async (dispatch) => {
  const tvAir = await axios.get("/tv/on_the_air");
  dispatch({ type: types.FETCH_TV_ON_AIR, payload: tvAir.data });

  const popular = await axios.get("/tv/popular");
  dispatch({ type: types.FETCH_TV_POPULAR, payload: popular.data });

  const topRated = await axios.get("/tv/top_rated");
  dispatch({ type: types.FETCH_TV_TOP_RATED, payload: topRated.data });
};

export const selectShow = (id) => async (dispatch) => {
  const response = await axios.get(id);
  dispatch({ type: types.FETCH_TV_SHOW, payload: response.data });
};

export const fetchGenre = (genre) => async (dispatch) => {
  const response = await axios.get("/discover/movie", {
    params: { with_genres: genre, page: 1 },
  });
  dispatch({ type: types.FETCH_GENRE_MOVIES, payload: response.data });
};

export const genreId = (genre) => {
  return { type: types.FETCH_GENRE_ID, payload: genre };
};
