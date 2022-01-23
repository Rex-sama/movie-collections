import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/tmdb_logo.svg";

function ShowsDetails() {
  const data = useSelector((state) => state);
  const base = data.config.baseUrl?.images;
  const show = data.selected_Show.show;

  console.log(data);
  return (
    <div className="p-5 dark:text-white">
      <div className="pb-5">
        <img src={logo} alt="tmdb_logo" width={100} height={90} />
      </div>
      <div>
        <img
          src={`${base?.secure_base_url}w300${show?.backdrop_path}`}
          alt="poster"
        />
        <p className="text-3xl">{show?.name}</p>
      </div>
    </div>
  );
}

export default ShowsDetails;
