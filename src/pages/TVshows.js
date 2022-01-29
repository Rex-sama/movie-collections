import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConfig, getTvShows } from "../actions";
import Loader from "../components/Loader";
const LandScapeMode = React.lazy(() => import("../components/LandScapeMode"));


function TVshows() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const base = data.config.baseUrl?.images;
  const on_air = data.tvShows.on_air?.results;
  const popular = data.tvShows.popular?.results;
  const top_rated = data.tvShows.top_rated?.results;
  // const tv_latest = data.tvShows.tv_latest?.results;

  console.log(data);

  useEffect(() => {
    dispatch(getConfig());
    dispatch(getTvShows());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <h1 className="text-xl px-4 font-medium">On Air Shows</h1>
        <LandScapeMode base={base} movies={on_air} autoplay={true} tv={true} />

        <h1 className="text-xl px-4 font-medium">Popular Shows</h1>
        <LandScapeMode
          base={base}
          movies={popular}
          autoplay={false}
          tv={true}
        />

        <h1 className="text-xl px-4 font-medium">Top Rated Shows</h1>
        <LandScapeMode
          base={base}
          movies={top_rated}
          autoplay={false}
          tv={true}
        />
      </Suspense>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default TVshows;
