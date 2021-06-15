import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Registration from '../Registration';
import Login from '../Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Login />} />
        <Route path="/registration" exact render={() => <Registration />} />
        <Route path="/chat" exact render={() => <div>Заглушка на чат компонент</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
