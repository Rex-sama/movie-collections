import logo from "../assets/tmdb_logo.svg";

function Greetings() {
  return (
    <div>
      <div className="px-4 pb-8 pt-5">
        <p className="text-xl pb-1 font-medium">Hi Rohit!</p>
        <p className="w-9/12 dark:font-light mt-1 text-sm">
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
