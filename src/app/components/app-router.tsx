import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';

export const AppRouter = (): JSX.Element => {
  const user = true;

  return user ?
    <Switch>
      {privateRoutes.map(({ path, component }) =>
        <Route path={path} component={component} exact={true} />,
      )}
      <Redirect to='' />
    </Switch> :
    <Switch>
      {publicRoutes.map(({ path, component }) =>
        <Route path={path} component={component} exact={true} />,
      )}
      <Redirect to='' />
    </Switch>;
};
