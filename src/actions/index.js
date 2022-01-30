import * as types from "./types";
import axios from "../config/api";

export const getConfig = () => async (dispatch) => {
  try {
    const response = await axios.get("/configuration");
    dispatch({ type: types.FETCH_CONFIG, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getMovies = () => async (dispatch) => {
  try {
    const now_playing = await axios.get("/movie/now_playing");
    dispatch({ type: types.FETCH_NOW_PLAYING, payload: now_playing.data });
  } catch (error) {
    console.log(error.response);
  }

  try {
    const upcoming = await axios.get("/movie/upcoming");
    dispatch({ type: types.FETCH_UPCOMING, payload: upcoming.data });
  } catch (error) {
    console.log(error.response);
  }

  try {
    const popular = await axios.get("/movie/popular");
    dispatch({ type: types.FETCH_POPULAR, payload: popular.data });
  } catch (error) {
    console.log(error.response);
  }

  try {
    const top_rated = await axios.get("/movie/top_rated");
    dispatch({ type: types.FETCH_TOP_RATED, payload: top_rated.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getGenre = () => async (dispatch) => {
  try {
    const response = await axios.get("/genre/movie/list");
    dispatch({ type: types.FETCH_GENRES, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchComplete = () => {
  return { type: types.FETCH_FINISHED };
};

export const getSearchMovie = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        query: name,
        language: "en-US",
      },
    });
    dispatch({ type: types.FETCH_SEARCH_MOVIES, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getSearchInput = (name) => {
  return { type: types.FETCH_SEARCH_KEYWORD, payload: name };
};

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.get(id, {
      params: {
        append_to_response: "videos",
      },
    });
    dispatch({ type: types.FETCH_MOVIE, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getCredits = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/movie/${id}/credits`);
    dispatch({ type: types.FETCH_CREDITS, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getSimilarMovies = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${id}/similar`);
    dispatch({ type: types.FECTH_SIMILAR_MOVIES, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getTvShows = () => async (dispatch) => {
  try {
    const tvAir = await axios.get("/tv/on_the_air");
    dispatch({ type: types.FETCH_TV_ON_AIR, payload: tvAir.data });
  } catch (error) {
    console.log(error.response);
  }

  try {
    const popular = await axios.get("/tv/popular");
    dispatch({ type: types.FETCH_TV_POPULAR, payload: popular.data });
  } catch (error) {
    console.log(error.response);
  }

  try {
    const topRated = await axios.get("/tv/top_rated");
    dispatch({ type: types.FETCH_TV_TOP_RATED, payload: topRated.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const selectShow = (id) => async (dispatch) => {
  try {
    const response = await axios.get(id);
    dispatch({ type: types.FETCH_TV_SHOW, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchGenre = (genre) => async (dispatch) => {
  try {
    const response = await axios.get("/discover/movie", {
      params: { with_genres: genre, page: 1 },
    });
    dispatch({ type: types.FETCH_GENRE_MOVIES, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const genreId = (genre) => {
  return { type: types.FETCH_GENRE_ID, payload: genre };
};
