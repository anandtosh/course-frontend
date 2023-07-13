import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import { FloatingButton } from './FloatingButton';

const Routes = () => {

  return (
    <Router>
      <PublicRoutes />
      <FloatingButton/>
    </Router>
  );
};

export default Routes;
