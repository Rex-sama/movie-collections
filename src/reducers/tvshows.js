import * as types from "../actions/types";

const init = { on_air: {}, popular: {}, top_rated: {} };

const tvShows = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_TV_ON_AIR:
      return { ...state, on_air: action.payload };
    case types.FETCH_TV_POPULAR:
      return { ...state, popular: action.payload };
    case types.FETCH_TV_TOP_RATED:
      return { ...state, top_rated: action.payload };
    default:
      return state;
  }
};

export default tvShows;
