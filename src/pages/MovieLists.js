import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
const PortraitMode = React.lazy(() => import("../components/PortraitMode"));

function MovieItems() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const base = data.config?.baseUrl?.images;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="px-2 pt-4">
        <SearchBox />
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
