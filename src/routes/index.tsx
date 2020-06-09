import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateInfoGame from '../pages/CreateInfoGame';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={CreateInfoGame} />
    </Switch>
  );
};

export default Routes;
