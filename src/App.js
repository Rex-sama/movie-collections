import { useState } from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Greetings from "./components/Greetings";
import MovieDetails from "./pages/MovieDetails";
import TVshows from "./pages/TVshows";
import ShowsDetails from "./pages/ShowsDetails";
import MovieLists from "./pages/MovieLists";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={darkMode ? "dark" : ""}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="dark:bg-gray-900 dark:text-white ">
        <Greetings />
      </div>
      <div
        className="dark:bg-gray-900 dark:text-white "
        style={{
          height: "auto",
          minHeight: "calc(100% - 160.5px)",
        }}
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

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
