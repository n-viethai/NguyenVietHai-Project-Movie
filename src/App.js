import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AdminFilm from "./pages/Admin/Films/AdminFilm";
import Showtime from "./pages/Admin/Showtime/Showtime";
import AddFilm from "./pages/Admin/Films/AddFilm/AddFilm";
import EditFilm from "./pages/Admin/Films/EditFilm/EditFilm";

import { LoadingComponent, ScrollToTopComponent } from "./Components";
// import { lazy, Suspense } from "react";

// const CheckoutTemplateLazy = lazy(() =>
//   import("./templates/CheckoutTemplate/CheckoutTemplate")
// );

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <ScrollToTopComponent />
      <LoadingComponent />
      <Switch>
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        <HomeTemplate exact path="/detail/:id" Component={Detail} />
        {/* <UserTemplate exact path="/register" Component={Register} /> */}
        <Register exact path="/register" />
        <Login exact path="/login" />
        <CheckoutTemplate exact path="/checkout/:id" Component={Checkout} />
        {/* <Suspense fallback={<h1>LOADING....</h1>}>
          <CheckoutTemplateLazy
            exact
            path="/checkout:id"
            Component={Checkout}
          />
        </Suspense> */}
        <AdminTemplate exact path="/admin" Component={Dashboard} />
        <AdminTemplate exact path="/admin/user" Component={Dashboard} />
        <AdminTemplate exact path="/admin/film" Component={AdminFilm} />
        <AdminTemplate exact path="/admin/film/addfilm" Component={AddFilm} />
        <AdminTemplate
          exact
          path="/admin/film/editfilm/:id"
          Component={EditFilm}
        />
        <AdminTemplate
          exact
          path="/admin/film/showtime/:id/:tenphim"
          Component={Showtime}
        />
        {/* <UserTemplate exact path="/login" Component={Login} /> */}
        <HomeTemplate exact path="/" Component={Home} />
      </Switch>
    </Router>
  );
}

// test git c??i n??

export default App;
