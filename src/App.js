import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
// import { lazy, Suspense } from "react";
// const CheckoutTemplateLazy = lazy(() =>
//   import("./templates/CheckoutTemplate/CheckoutTemplate")
// );

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <ScrollToTop />
      <Switch>
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        <HomeTemplate exact path="/detail/:id" Component={Detail} />
        <Route exact path="/register" component={Register} />
        <CheckoutTemplate exact path="/checkout/:id" Component={Checkout} />
        {/* <Suspense fallback={<h1>LOADING....</h1>}>
          <CheckoutTemplateLazy
            exact
            path="/checkout:id"
            Component={Checkout}
          />
        </Suspense> */}
        <UserTemplate exact path ="/login" Component = {Login} />
        <HomeTemplate exact path="/" Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
