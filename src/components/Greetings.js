import { useSelector } from "react-redux";
import logo from "../assets/tmdb_logo.svg";

function Greetings() {
  const show = useSelector((state) => state.movies.header);
  console.log(show);
  return (
    <div style={show ? { display: "block" } : { display: "none" }}>
      <div className="px-4 py-8">
        <p className="text-4xl pb-1 font-medium">Hi Rohit!</p>
        <p className="w-9/12 dark:font-light mt-5 ">
          Explore your favourite movies and TV shows!
        </p>
      </div>
      <div className="absolute top-4 right-2   ">
        <img src={logo} alt="movie_db" width={100} height={90} />
      </div>
    </div>
  );
}

export default Greetings;
