import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGenre,
  getGenre,
  toogleHeader,
  getConfig,
  genreId,
  getSearchInput,
} from "../actions";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";

function Search(props) {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const show = data.movies.header;
  console.log(data);

  useEffect(() => {
    dispatch(toogleHeader(true));
    dispatch(getGenre());
    window.scrollTo(0, 0);
    dispatch(genreId(null));
    localStorage.removeItem("genre_id");
    localStorage.removeItem("search_id");
    dispatch(getSearchInput(""));
    dispatch(getConfig());
  }, [dispatch]);

  const onGenreSelect = (item, name) => {
    dispatch(genreId({ id: item, name: name }));
    localStorage.setItem("genre_id", JSON.stringify({ id: item, name: name }));
    dispatch(getSearchInput(""));
    dispatch(fetchGenre(item));
    dispatch(toogleHeader(false));
    props.history.push(`/search/${name}/#${item}`);
  };

  return (
    <div
      className="px-4 dark:text-black"
      style={!show ? { paddingTop: "20px" } : { paddingTop: "0px" }}
    >
      <SearchBox />
      <Suspense fallback={<Loader />}>
        <div className="py-8 grid grid-cols-2 gap-3 mb-10 ">
          {data.genre?.genre?.genres?.map((item) => {
            return (
              <div
                key={item.id}
                className="text-center p-3 text-base font-medium bg-blue-400 dark:bg-green-600 dark:text-gray-200 rounded-md"
                onClick={() => onGenreSelect(item.id, item.name)}
              >
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </Suspense>
      <br />
    </div>
  );
}

export default Search;
