import * as types from "./types";
import axios from "../config/api";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const getNowPlaying = () => async (dispatch) => {
  const response = await axios.get("/movie/now_playing");
  dispatch({ type: types.FETCH_NOW_PLAYING, payload: response.data });
};
