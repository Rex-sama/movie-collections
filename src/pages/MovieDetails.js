import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  fetchMovie,
  getConfig,
  getCredits,
  getSimilarMovies,
  toogleHeader,
} from "../actions";
import logo from "../assets/tmdb_logo.svg";
import profile from "../assets/profile.png";
import { HiOutlineCurrencyDollar as Dollar } from "react-icons/hi";
import { BsFillPlayFill as Play } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import PortraitMode from "../components/PortraitMode";

function MovieDetails() {
  const data = useSelector((state) => state);
  const movie = data.movie?.movie;
  const base = data.config.baseUrl?.images;
  const credits = data.movie.credit?.cast;
  const similar = data.movie.similar?.results;

  const location = useLocation();
  const dispatch = useDispatch();
  console.log(movie);

  useEffect(() => {
    dispatch(getConfig());
    dispatch(fetchMovie(location.pathname));
    dispatch(toogleHeader(false));
    dispatch(getSimilarMovies(location.pathname));
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(getCredits(movie?.id));
  }, [movie, dispatch]);

  return (
    <div className="p-5 dark:text-white  ">
      <div>
        <img src={logo} alt="tmdb_logo" width={100} height={90} />
      </div>
      <div className=" py-7">
        <p className="text-4xl font-bold" style={{ width: "90%" }}>
          {movie?.title} ({movie?.release_date?.split("-")[0]})
        </p>
        {movie?.tagline && <p style={{ color: "#01d277" }}>{movie?.tagline}</p>}
      </div>
      <div className="grid grid-cols-2">
        <div className="pr-6">
          <img
            src={`${base?.secure_base_url}w780${movie?.poster_path}`}
            alt="poster"
            className="rounded-lg"
          />
        </div>
        <div>
          <p>
            {movie?.status} - {movie?.runtime}min
          </p>
          <p style={{ fontSize: "0.8em" }} className="flex flex-wrap mt-2">
            {movie?.spoken_languages?.map((item, index) => {
              return (
                <span className="mr-2" key={index}>
                  {item.english_name} /
                </span>
              );
            })}
          </p>

          <div className="flex items-center gap-2 py-2">
            <ReactStars
              count={5}
              size={24}
              activeColor="#01d277"
              value={Math.round(movie?.vote_average / 2)}
            />
            <p style={{ fontSize: "0.8em" }}>
              {movie?.vote_average?.toFixed(1)}/10
            </p>
          </div>
          <div className="flex items-center gap-2 py-2">
            <Dollar style={{ fontSize: "2em", color: "#01d277" }} /> $
            {movie?.revenue?.toLocaleString("en-Us")}
          </div>
          <div>
            <div
              className="flex items-center gap-2 mb-4 border border-gray-900 dark:border-green-500 py-2 px-5 rounded-full"
              style={{ width: "fit-content" }}
            >
              Trailer
              <Play style={{ fontSize: "1.2em", marginTop: "2px" }} />
            </div>
            <div
              className="flex items-center gap-2 border border-gray-900 dark:border-green-500 py-2 px-5 rounded-full"
              style={{ width: "fit-content" }}
            >
              Website
              <BsLink45Deg style={{ fontSize: "1.2em", marginTop: "2px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-7">
        <p className="pb-4 text-2xl font-bold">Genres</p>
        <div className="flex flex-wrap gap-3 ">
          {movie?.genres?.map((item) => {
            return (
              <p
                key={item.id}
                className="py-3 px-6 rounded-full font-medium"
                style={{ fontSize: "12px", backgroundColor: "#01d277" }}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      </div>

      <div className="pt-7">
        <p className="pb-4 text-2xl font-bold">Synopsis</p>
        <p className="leading-9 ..."> {movie.overview} </p>
      </div>
      <div className="pt-7">
        <p className="pb-4 text-2xl font-bold">Cast</p>
        <div className="overflow-scroll" style={{ height: "300px" }}>
          {credits?.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 py-4 border-b border-gray-900 dark:border-gray-500"
              >
                <div
                  className="bg-center bg-cover overflow-hidden ..."
                  style={{ width: "50px", height: "50px" }}
                >
                  <img
                    src={
                      item?.profile_path
                        ? `${base?.secure_base_url}w45${item.profile_path}`
                        : profile
                    }
                    alt="profile"
                    className="rounded-full ..."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p style={{ fontSize: "12px" }}>
                  {item.name} &nbsp;
                  <span
                    className="dark:text-white font-medium"
                    style={{ color: "#01d277" }}
                  >
                    as {item.character}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20">
        <p className=" text-3xl font-bold">Similar Movies</p>
        <PortraitMode base={base} movies={similar} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default MovieDetails;
