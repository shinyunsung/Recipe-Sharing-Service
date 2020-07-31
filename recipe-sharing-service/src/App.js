import React, { Component } from "react";
import Main from "./container/Main/Main";
import SearchRecipe from "./container/SearchRecipe/SearchRecipe";
import RecipeRegistration from "./container/RecipeRegistration/RecipeRegistration";
import MoreRecipe from "./container/ToSeeMore/Recipe";
import MoreJointPurchase from "./container/ToSeeMore/JointPurchase";
import ViewRecipe from "./container/ViewDetail/ViewRecipe";
import JointPurchaseRegistration from "./container/RecipeRegistration/JointPurchaseRegistration";
import { ThemeProvider } from "styled-components";
import theme from "./style/Theme";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <ThemeProvider theme={theme}>
              <Route exact path="/" component={Main} />
              <Route exact path="/SearchRecipe" component={SearchRecipe} />
              <Route exact path="/MoreRecipe" component={MoreRecipe} />
              <Route exact path="/ViewRecipe" component={ViewRecipe} />
              <Route
                exact
                path="/MoreJointPurchase"
                component={MoreJointPurchase}
              />
              <Route
                exact
                path="/RecipeRegistration"
                component={RecipeRegistration}
              />
              <Route
                exact
                path="/JointPurchaseRegistration"
                component={JointPurchaseRegistration}
              />
            </ThemeProvider>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
