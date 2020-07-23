import React, { Component } from "react";
import Main from "./container/Main/Main";
import SearchRecipe from "./container/SearchRecipe/SearchRecipe";
import RecipeRegistration from "./container/RecipeRegistration/RecipeRegistration";

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
              <Route
                exact
                path="/RecipeRegistration"
                component={RecipeRegistration}
              />
            </ThemeProvider>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
