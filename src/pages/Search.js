import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchComplete,
  getGenre,
  getSearchMovie,
  toogleHeader,
} from "../actions";
import PortraitMode from "../components/PortraitMode";

function Search() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const base = data.config?.baseUrl?.images;
  const show = data.movies.header;
  console.log(data);
  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  const onEnterText = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      dispatch(getSearchMovie(input));
      dispatch(fetchComplete());
      dispatch(toogleHeader(false));
    }
  };

  return (
    <div
      className="px-4 dark:text-black"
      style={!show ? { paddingTop: "20px" } : { paddingTop: "0px" }}
    >
      <div className="bg-white grid grid-cols-10 gap-2 border items-center border-black px-2 py-3 rounded-lg">
        <FiSearch className="text-3xl ml-2" />
        <input
          type="text"
          className="col-span-8 text-2xl pl-2 ml-1"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={onEnterText}
        />
        {input && (
          <GrClose className=" text-3xl" onClick={() => setInput("")} />
        )}
      </div>
      {show ? (
        <div className="py-10 grid grid-cols-2 gap-4 mb-10 ">
          {data.genre?.genre?.genres?.map((item) => {
            return (
              <div
                key={item.id}
                className="text-center px-6 py-8 text-2xl font-medium bg-blue-400 dark:bg-red-500 dark:text-gray-200 rounded-lg"
              >
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <PortraitMode base={base} movies={data.genre?.search?.results} />
      )}

      <br />
      <br />
    </div>
  );
}

export default Search;
