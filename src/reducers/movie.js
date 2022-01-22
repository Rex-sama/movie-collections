import * as types from "../actions/types";

const init = {
  movie: {},
  credit: {},
  similar: {},
};

const movie = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE:
      return { ...state, movie: action.payload };
    case types.FETCH_CREDITS:
      return { ...state, credit: action.payload };
    case types.FECTH_SIMILAR_MOVIES:
      return { ...state, similar: action.payload };
    default:
      return state;
  }
};

export default movie;
