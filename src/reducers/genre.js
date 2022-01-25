import * as types from "../actions/types";

const init = {
  loading: true,
  genre: {},
  search: {},
  search_keyword: "",
};

const genre = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_GENRES:
      return { ...state, genre: action.payload };
    case types.FETCH_SEARCH_MOVIES:
      return { ...state, search: action.payload };
    case types.FETCH_GENRE_MOVIES:
      return { ...state, search: action.payload };
    case types.FETCH_FINISHED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default genre;
