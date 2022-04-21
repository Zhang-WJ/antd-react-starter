import  { lazy } from 'react';

const HomePage = lazy(()=>import('../pages/home'))
const AboutPage = lazy(()=>import('../pages/about'))
const routes = [
  {path: '/', extract: true, Component: HomePage},
  {path: '/about', extract: true, Component: AboutPage},
]


export default routes
