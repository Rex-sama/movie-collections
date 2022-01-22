import * as types from "../actions/types";

const init = {
  loading: true,
  now_playing: {},
  upcoming: {},
  popular: {},
  top_rated: {},
  header: true,
};

const movies = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_NOW_PLAYING:
      return { ...state, now_playing: action.payload };
    case types.FETCH_UPCOMING:
      return { ...state, upcoming: action.payload };
    case types.FETCH_POPULAR:
      return { ...state, popular: action.payload };
    case types.FETCH_TOP_RATED:
      return { ...state, top_rated: action.payload };
    case types.TOGGLE_HEADER:
      return { ...state, header: action.payload };
    default:
      return state;
  }
};

export default movies;
