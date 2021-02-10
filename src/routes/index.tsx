import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';

import routes from './routes';

function AppRouter() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route
            key={`${path}-${Boolean(exact)}`}
            path={path}
            component={component}
            exact={exact}
          />
        ))}
      </Switch>
    </Router>
  );
}

export { AppRouter };
