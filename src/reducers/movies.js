import * as types from "../actions/types";

const init = { loading: true };

const movies = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_NOW_PLAYING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default movies;
