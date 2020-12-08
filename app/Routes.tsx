/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes';
import App from './containers/App/App';
import HomePage from './screens/HomeScreen';

// Lazily load routes and code split with webpack
const LazyWindowScreen = React.lazy(() =>
  import(/* webpackChunkName: "WindowScreen" */ './screens/WindowScreen')
);
const LazyMenuScreen = React.lazy(() =>
  import(/* webpackChunkName: "MenuScreen" */ './screens/MenuScreen')
);

const LazyWindow = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyWindowScreen {...props} />
  </React.Suspense>
);

const LazyMenu = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyMenuScreen {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.WINDOW} component={LazyWindow} />
        <Route exact path={routes.MENU} component={LazyMenu} />
      </Switch>
    </App>
  );
}
