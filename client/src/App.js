import {Switch, Route, Link} from "react-router-dom"
import Home from "./Home"
import Movies from "./Movies"
import Shows from "./Shows"
import Buys from "./Buys"
import Profile from "./Profile"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/shows">Tv Shows</Link>
        <Link to="/buys">Purchases or Rentals</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/shows">
          <Shows />
        </Route>
        <Route path="/buys">
          <Buys />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
