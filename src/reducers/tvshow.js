import * as types from "../actions/types";

const init = { show: {} };

const Show = (state = init, action) => {
  switch (action.type) {
    case types.FETCH_TV_SHOW:
      return { ...state, show: action.payload };
    default:
      return state;
  }
};

export default Show;
