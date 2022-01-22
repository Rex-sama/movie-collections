import * as types from "../actions/types";

const init = { loading: true };

const config = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_CONFIG:
      return { ...state, baseUrl: action.payload };

    default:
      return state;
  }
};

export default config;
