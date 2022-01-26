import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getConfig, getSearchMovie, toogleHeader } from "../actions";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
const PortraitMode = React.lazy(() => import("../components/PortraitMode"));

function MovieItems() {
  const data = useSelector((state) => state);
  const location = useLocation();
  const dispatch = useDispatch();
  const base = data.config?.baseUrl?.images;
  const searchText = location.pathname?.split("/")[2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getConfig())
    dispatch(toogleHeader(false));
    dispatch(getSearchMovie(searchText));
  }, [dispatch, searchText]);

  console.log(data.genre);
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
