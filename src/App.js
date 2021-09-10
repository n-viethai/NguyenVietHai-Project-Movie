import { createBrowserHistory } from "history";
import { Router,Route, Switch } from "react-router";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />

        <HomeTemplate exact path="/" Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
