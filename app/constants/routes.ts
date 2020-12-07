export type Home = '/';
export type Counter = '/counter';

export const home: Home = '/';
export const counter: Counter = '/counter';

export type Route = Home | Counter;
export type Routes = {
  HOME: Home;
  COUNTER: Counter;
};

export type Name = string;

const routes: Routes = {
  HOME: home,
  COUNTER: counter,
};

export default routes;

export function routeName(r: string): Name {
  if (r === '/') return 'Home';
  if (r === '/counter') return 'Counter';
  return 'Route not found';
}
