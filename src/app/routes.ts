import { App } from './app';

interface Route {
  path: string,
  component: () => JSX.Element
}

export const publicRoutes: Route[] = [
  { path: '', component: App },
];

export const privateRoutes: Route[] = [
  { path: '', component: App },
];
