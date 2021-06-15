import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Registration from '../Registration';
import Login from '../Login';
import { APP_ROUTES } from '/src/contsants/reactRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={APP_ROUTES.login} exact component={Login} />
        <Route path={APP_ROUTES.registration} exact component={Registration} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
