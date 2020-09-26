import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Grommet } from 'grommet';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import AllReviewsPage from './containers/AllReviewsPage';
import AboutTeamPage from './containers/AboutTeamPage';
import appThemeConfig from './utils/themeConfig';

export default function App() {
  return (
    <Router>
      <Grommet theme={appThemeConfig} background="#f0f3f6">
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/team">
            <AboutTeamPage />
          </Route>
          <Route path="/:productId/allreviews">
            <AllReviewsPage />
          </Route>
          <Route path="/:productId">
            <HomePage />
          </Route>
        </Switch>
      </Grommet>
    </Router>
  );
}