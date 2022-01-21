import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { getGenre } from "../actions";

function Search() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data.genre?.genres);
  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  return (
    <div className="px-4 dark:text-black ">
      <div className="bg-white grid grid-cols-10 gap-2 border items-center border-black px-2 py-3 rounded-lg">
        <FiSearch className="text-3xl ml-2" />
        <input
          type="text"
          className="col-span-8 text-2xl pl-2 ml-1"
          placeholder="Search"
        />
        <GrClose className=" text-3xl" />
      </div>
      <div className="py-10 grid grid-cols-2 gap-4 mb-10 ">
        {data.genre?.genres?.map((item) => {
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
      <br />
      <br />
    </div>
  );
}

export default Search;
