import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import TVshows from "./pages/TVshows";
import ShowsDetails from "./pages/ShowsDetails";
import MovieLists from "./pages/MovieLists";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mode = localStorage.getItem("darkMode");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setDarkMode(JSON.parse(mode));
  }, [mode]);

  useEffect(() => {
    if (window.innerWidth > 400) {
      setWidth(window.innerWidth);
    } else {
      setWidth(window.innerWidth);
    }
    // const updateSize = () => {

    // };
    // window.addEventListener("resize", updateSize);
    // return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: width > 400 ? "flex" : "block",
        justifyContent: width > 400 ? "center" : "center",
      }}
    >
      <div
        className={darkMode ? "dark" : ""}
        style={{
          position: "absolute",
          width: width > 400 ? "400px" : "100%",
          height: "100%",
        }}
      >
        <div
          className="dark:bg-gray-900 dark:text-white  "
          style={{ height: "auto", maxHeight: "inherit" }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/search/:id" component={MovieLists} />
            <Route exact path="/tv-shows" component={TVshows} />
            <Route exact path="/movie/:id" component={MovieDetails} />
            <Route exact path="/tv/:id" component={ShowsDetails} />
          </Switch>
        </div>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} width={width} />
      </div>
    </div>
  );
}

export default App;
