import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Navbar from "../components/navigations/Navbar";
import About from "../pages/About";
import SingleRecipe from "../pages/SingleRecipe";
import { routes } from "../routes/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={routes.home} component={App} />
        <Route path={routes.about} component={About} />
        <Route path={routes.singleRecipe} component={SingleRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
