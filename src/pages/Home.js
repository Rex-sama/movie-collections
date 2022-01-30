import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConfig, getMovies } from "../actions";
import Greetings from "../components/Greetings";
import Loader from "../components/Loader";
const LandScapeMode = React.lazy(() => import("../components/LandScapeMode"));

function Home() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const base = data.config?.baseUrl?.images;

  console.log(data);

  useEffect(() => {
    dispatch(getConfig());
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="dark:bg-gray-900 dark:text-white ">
        <Greetings />
      </div>
      <Suspense fallback={<Loader />}>
        <h1 className="text-xl px-4 font-medium">Now Playing</h1>
        <LandScapeMode
          base={base}
          movies={data.movies.now_playing?.results}
          autoplay={true}
          tv={false}
        />
        <h1 className="text-xl px-4 font-medium">Upcoming</h1>
        <LandScapeMode
          base={base}
          movies={data.movies.upcoming?.results}
          autoplay={false}
          tv={false}
        />
        <h1 className="text-xl px-4 font-medium">Popular</h1>

        <LandScapeMode
          base={base}
          movies={data.movies.popular?.results}
          autoplay={false}
          tv={false}
        />
        <h1 className="text-xl px-4 font-medium">Top Rated</h1>
        <LandScapeMode
          base={base}
          movies={data.movies.top_rated?.results}
          autoplay={false}
          tv={false}
        />
      </Suspense>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
