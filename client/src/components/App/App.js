import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Registration from '../Registration';
import Login from '../Login';
import Chat from '../Chat';
import Header from '../Header';
import { APP_ROUTES } from '/src/constants/reactRoutes';

import { StAppDiv } from './styled';

const App = ({ userTheme, userThemeMode }) => {
  return (
    <StAppDiv url={userThemeMode === 'dark' ? userTheme.dark : userTheme.light}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={APP_ROUTES.login} exact component={Login} />
          <Route path={APP_ROUTES.registration} exact component={Registration} />
          <Route path={APP_ROUTES.chat} exact component={Chat} />
        </Switch>
      </BrowserRouter>
      <NotificationContainer />
    </StAppDiv >
  );
};

App.propTypes = {
  userTheme: PropTypes.object,
  userThemeMode: PropTypes.string,
};

export default App;
