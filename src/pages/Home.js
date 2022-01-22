import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getConfig,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
  toogleHeader,
} from "../actions";
import LandScapeMode from "../components/LandScapeMode";

function Home() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const base = data.config?.baseUrl?.images;

  console.log(data);

  useEffect(() => {
    dispatch(getConfig());
    dispatch(getNowPlaying());
    dispatch(getUpcoming());
    dispatch(getPopular());
    dispatch(getTopRated());
    dispatch(toogleHeader(true));
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-3xl px-4 font-medium">Now Playing</h1>
      <LandScapeMode
        base={base}
        movies={data.movies.now_playing?.results}
        autoplay={true}
      />
      <h1 className="text-3xl px-4 font-medium">Upcoming</h1>
      <LandScapeMode
        base={base}
        movies={data.movies.upcoming?.results}
        autoplay={false}
      />
      <h1 className="text-3xl px-4 font-medium">Popular</h1>
      <LandScapeMode
        base={base}
        movies={data.movies.popular?.results}
        autoplay={false}
      />
      <h1 className="text-3xl px-4 font-medium">Top Rated</h1>
      <LandScapeMode
        base={base}
        movies={data.movies.top_rated?.results}
        autoplay={false}
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
