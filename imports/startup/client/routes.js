import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../../ui/App';

export const RenderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Router>
);
