import { useState } from "react";
import ChangeMode from "./components/ChangeMode";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import Greetings from "./components/Greetings";

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
      <div className="dark:bg-gray-900 dark:text-white">
        <Greetings />
        <ChangeMode darkMode={darkMode} setDarkMode={setDarkMode} />
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
        </Switch>
      </div>

      <NavBar />
    </div>
  );
}

export default App;
