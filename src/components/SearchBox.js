import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchComplete,
  genreId,
  getSearchInput,
  getSearchMovie,
} from "../actions";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useHistory, useLocation } from "react-router-dom";

function SearchBox() {
  const data = useSelector((state) => state.genre);
  const search = data?.search_keyword;
  const search_id = localStorage.getItem("search_id");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setInput("");
    } else if (search_id || search) {
      setInput(search_id || search);
      dispatch(genreId(null));
    } else {
      setInput("");
    }
  }, [dispatch, search, search_id, location]);

  const onEnterText = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      dispatch(getSearchMovie(input));
      dispatch(getSearchInput(input));
      dispatch(fetchComplete());
      localStorage.setItem("search_id", input);
      history.push(`/search/${input}`);
    }
  };

  return (
    <div className="bg-white grid grid-cols-10 gap-2 border items-center border-black p-2 rounded-md dark:text-gray-900">
      <FiSearch className="text-xl ml-2 " />
      <input
        type="text"
        className="col-span-8 text-base pl-2 ml-1 outline-none "
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={onEnterText}
      />
      {input && <GrClose className=" text-xl" onClick={() => setInput("")} />}
    </div>
  );
}

export default SearchBox;
