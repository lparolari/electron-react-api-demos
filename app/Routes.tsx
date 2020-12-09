/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Backdrop from './components/Backdrop/Backdrop';
import routes from './constants/routes';
import App from './containers/App/App';
import HomePage from './screens/HomeScreen';
import ManagedWindow from './screens/Window/ManagedWindow/Window';
import NewBorderlessWindow from './screens/Window/NewFramelessWindow/Window';
import NewWindow from './screens/Window/NewWindow/Window';
import UsingEventsWindow from './screens/Window/UsingEventsWindow/Window';

// Lazily load routes and code split with webpack
const LazyWindowScreen = React.lazy(() =>
  import(/* webpackChunkName: "WindowScreen" */ './screens/WindowScreen')
);
const LazyMenuScreen = React.lazy(() =>
  import(/* webpackChunkName: "MenuScreen" */ './screens/MenuScreen')
);
const LazyNativeUIScreen = React.lazy(() =>
  import(
    /* webpackChunkName: "NativeUserInterfaceScreen" */ './screens/NativeUserInterfaceScreen'
  )
);

const HomeScreen = (props: Record<string, unknown>) => <HomePage {...props} />;

const LazyWindow = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<Backdrop />}>
    <LazyWindowScreen {...props} />
  </React.Suspense>
);

const LazyMenu = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<Backdrop />}>
    <LazyMenuScreen {...props} />
  </React.Suspense>
);

const LazyNativeUI = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<Backdrop />}>
    <LazyNativeUIScreen {...props} />
  </React.Suspense>
);

const AppSwitch = () => (
  <Switch>
    <Route exact path={routes().home()} component={HomeScreen} />
    <Route exact path={routes().window().main()} component={LazyWindow} />
    <Route exact path={routes().menu()} component={LazyMenu} />
    <Route exact path={routes().nativeUI()} component={LazyNativeUI} />
  </Switch>
);

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path={routes().window().new()} component={NewWindow} />
        <Route
          exact
          path={routes().window().frameless()}
          component={NewBorderlessWindow}
        />
        <Route
          exact
          path={routes().window().managed()}
          component={ManagedWindow}
        />
        <Route
          exact
          path={routes().window().events()}
          component={UsingEventsWindow}
        />
        <Route path="*">
          <App>
            <AppSwitch />
          </App>
        </Route>
      </Switch>
    </>
  );
}
