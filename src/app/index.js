import React from 'react';
import { useRoutes } from 'hookrouter';

import Navbar from '../components/Navbar';
import Lights from '../screens/Lights';
import Fields from '../screens/Fields';
import NotFound from '../screens/NotFound';

const routes = {
  '/': () => <Fields />,
  '/lights': () => <Lights />
};

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult ? (
    <>
      <Navbar />
      {routeResult}
    </>
  )
    : <NotFound />;
};

export default App;
