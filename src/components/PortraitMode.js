import { fetchMovie, toogleHeader } from "../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function PortraitMode({ base, movies }) {
  const dispatch = useDispatch();
  const history = useHistory();
 
  return (
    <div className="pt-5 grid grid-cols-2 dark:text-white mt-5 mb-20">
      {movies?.map((item) => {
        return (
          <div
            className="px-2 bg-cover mb-8"
            key={item.id}
            onClick={() => {
              dispatch(fetchMovie(`/movie/${item.id}`));
              history.push(`/movie/${item.id}`);
              dispatch(toogleHeader(false));
            }}
          >
            <img
              className="rounded-md"
              src={`${base?.secure_base_url}w780${item.poster_path}`}
              alt={item.title}
            />
            <p className="text-center text-sm">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PortraitMode;
