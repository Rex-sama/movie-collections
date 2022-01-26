import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComplete, getSearchMovie, toogleHeader } from "../actions";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const data = useSelector((state) => state.genre.search_keyword);
  console.log("search - ", data);
  const [input, setInput] = useState(data);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setInput(data);
  }, [data]);

  const onEnterText = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      dispatch(getSearchMovie(input));
      dispatch(fetchComplete());
      dispatch(toogleHeader(false));
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
