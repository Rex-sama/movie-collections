import { useState } from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import Greetings from "./components/Greetings";
import MovieDetails from "./pages/MovieDetails";

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
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/movie/:id" component={MovieDetails}></Route>
        </Switch>
      </div>

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
