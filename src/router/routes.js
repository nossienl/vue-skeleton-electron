import SplashPage from '../page/SplashPage';
import HomePage from '../page/HomePage';

export const RouteNames = {
  HOME: 'home',
  SPLASH: 'splash',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/splash',
    component: SplashPage,
    name: RouteNames.SPLASH,
  },
];
