import React, { Suspense, lazy } from 'react';
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from "./routes";
// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({path, Component})=>{
              return <Route  path={path} element={<Component />} />
            })}
          </Routes>
        </Suspense>
      </Router>
  );
}
