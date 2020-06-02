import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import DetailsGame from '../pages/DetailsGame';
import AllByCategory from '../pages/AllByCategory';
import CreateInfoGame from '../pages/CreateInfoGame';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/details-game" component={DetailsGame} />
      <Route path="/show-all" component={AllByCategory} />
      <Route path="/create-info-game" component={CreateInfoGame} />
    </Switch>
  );
};

export default Routes;
