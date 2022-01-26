import React, { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
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
import ModalVideo from "react-modal-video";
const ReactStars = React.lazy(() => import("react-stars"));

function MovieDetails() {
  const data = useSelector((state) => state);
  const movie = data.movie?.movie;
  const base = data.config.baseUrl?.images;
  const credits = data.movie.credit?.cast;
  const similar = data.movie.similar?.results;
  const score = Math.round(movie?.vote_average / 2);
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  console.log(movie);

  const key = movie?.videos?.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  useEffect(() => {
    dispatch(getConfig());
    dispatch(fetchMovie(location.pathname));
    dispatch(toogleHeader(false));
    dispatch(getSimilarMovies(location.pathname));
    window.scrollTo(0, 0);
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(getCredits(movie?.id));
  }, [movie, dispatch]);

  return (
    <div className="p-4 dark:text-white  ">
      <div>
        <img src={logo} alt="tmdb_logo" width={100} height={90} />
      </div>
      <div className=" py-4">
        <p className=" font-bold" style={{ fontSize: "1.3em" }}>
          {movie?.title} ({movie?.release_date?.split("-")[0]})
        </p>
        {movie?.tagline && (
          <p className="text-green-500 dark:text-green-400 text-sm">
            {movie?.tagline}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2">
        <div className="pr-3">
          <img
            src={`${base?.secure_base_url}w780${movie?.poster_path}`}
            alt="poster"
            className="rounded-md"
          />
        </div>
        <div>
          <p style={{ fontSize: "0.85em" }}>
            {movie?.status} - {movie?.runtime}min
          </p>
          <p style={{ fontSize: "0.8em" }} className="flex flex-wrap ">
            {movie?.spoken_languages?.map((item, index) => {
              return (
                <span className="mr-2" key={index}>
                  {item.english_name} /
                </span>
              );
            })}
          </p>

          <div className="flex items-center gap-1 ">
            <Suspense fallback={"Loading..."}>
              <ReactStars
                count={5}
                size={24}
                activeColor="#01d277"
                value={score}
              />
            </Suspense>

            {console.log("sss", score)}
            <p style={{ fontSize: "0.8em" }}>
              {movie?.vote_average?.toFixed(1)}/10
            </p>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <Dollar style={{ fontSize: "1.8em", color: "#01d277" }} />
            <p className="text-sm">
              ${movie?.revenue?.toLocaleString("en-Us")}
            </p>
          </div>
          <div>
            <div onClick={() => setOpen(true)}>
              <div
                className="flex items-center gap-2 mb-2 border border-gray-900 dark:border-green-500 py-1 px-4 rounded-full"
                style={{ width: "fit-content" }}
              >
                <p style={{ fontSize: "0.85em" }}> Trailer</p>
                <Play style={{ fontSize: "1em", marginTop: "2px" }} />
              </div>
              <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId={key}
                onClose={() => setOpen(false)}
              />
            </div>

            <div
              className="flex items-center gap-2 border border-gray-900 dark:border-green-500 py-1 px-4 rounded-full"
              style={{ width: "fit-content" }}
            >
              <a href={movie?.homepage} style={{ fontSize: "0.85em" }}>
                Website
              </a>

              <BsLink45Deg style={{ fontSize: "1em", marginTop: "2px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <p className="pb-4 text-xl font-bold">Genres</p>
        <div className="flex flex-wrap gap-2 ">
          {movie?.genres?.map((item) => {
            return (
              <p
                key={item.id}
                className="py-2 px-4 rounded-full font-medium bg-green-400 dark:bg-green-600"
                style={{ fontSize: "15px" }}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      </div>

      <div className="pt-6">
        <p className="pb-3 text-xl font-bold">Synopsis</p>
        <p className="leading-6  ..." style={{ fontSize: "14px" }}>
          {movie.overview}
        </p>
      </div>
      <div className="pt-7">
        <p className="pb-4 text-xl font-bold">Cast</p>
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
                <p style={{ fontSize: "13px" }}>
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
      <div className="mt-10">
        <p className=" text-xl font-bold">Similar Movies</p>
        <PortraitMode base={base} movies={similar} />
      </div>
    </div>
  );
}

export default MovieDetails;
