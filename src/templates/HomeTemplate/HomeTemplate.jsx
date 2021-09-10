import { Route } from "react-router";
import { Fragment } from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
            <Fragment>
                <Header {...propsRoute} />
                <HomeCarousel {...propsRoute} />
                <Component {...propsRoute} />
                <Footer {...propsRoute} />
            </Fragment>
        )
      }}
    />
  );
};
