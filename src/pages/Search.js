import React, { Suspense, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchComplete,
  getGenre,
  getSearchMovie,
  toogleHeader,
} from "../actions";
import Loader from "../components/Loader";
const PortraitMode = React.lazy(() => import("../components/PortraitMode"));

function Search() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const base = data.config?.baseUrl?.images;
  const show = data.movies.header;
  console.log(data);
  useEffect(() => {
    dispatch(toogleHeader(true));
    dispatch(getGenre());
    window.scrollTo(0, 0);
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
      <div className="bg-white grid grid-cols-10 gap-2 border items-center border-black p-2 rounded-md">
        <FiSearch className="text-xl ml-2" />
        <input
          type="text"
          className="col-span-8 text-base pl-2 ml-1 outline-none"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={onEnterText}
        />
        {input && <GrClose className=" text-xl" onClick={() => setInput("")} />}
      </div>

      {show ? (
        <Suspense fallback={<Loader />}>
          <div className="py-8 grid grid-cols-2 gap-3 mb-10 ">
            {data.genre?.genre?.genres?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="text-center p-3 text-base font-medium bg-blue-400 dark:bg-green-600 dark:text-gray-200 rounded-md"
                >
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </Suspense>
      ) : (
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
      )}

      <br />
    </div>
  );
}

export default Search;
