import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchGenre,
  // genreId,
  getConfig,
  getSearchMovie,
} from "../actions";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
const PortraitMode = React.lazy(() => import("../components/PortraitMode"));

function MovieItems() {
  const data = useSelector((state) => state);
  const location = useLocation();
  const dispatch = useDispatch();
  const base = data.config?.baseUrl?.images;
  const searchText = location.pathname?.split("/")[2];
  const genre_id = JSON.parse(localStorage.getItem("genre_id"));
  const hash = location.hash;
  // console.log(location.hash.split("#")[1]);

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.getItem("genre_id");
  }, [genre_id]);

  useEffect(() => {
    dispatch(getConfig());
    if (hash) {
      dispatch(fetchGenre(hash.split("#")[1]));
      localStorage.removeItem("search_id");
    } else if (searchText) {
      console.log("aspd,", searchText);
      dispatch(getSearchMovie(searchText));
      localStorage.setItem("search_id", searchText);
    }
  }, [dispatch, searchText, hash]);

  // console.log(data.genre);
  return (
    <div>
      <div className="px-2 pt-4">
        <SearchBox />
      </div>
      <div className="px-2 pt-2">
        <p className="text-medium">Search Result :</p>
        <h1 className="text-2xl">
          {searchText[0].toUpperCase() + searchText.substring(1)}
        </h1>
      </div>
      <Suspense
        fallback={
          <div className="mt-40">
            <Loader />
            <div style={{ height: "100vw" }}></div>
          </div>
        }
      >
        <PortraitMode base={base} movies={data.genre?.search?.results} />
      </Suspense>
    </div>
  );
}

export default MovieItems;
