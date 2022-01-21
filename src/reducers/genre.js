import * as types from "../actions/types";

const genre = (state = { loading: true }, action) => {
  if (action.type === types.FETCH_GENRES) {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
};

export default genre;
