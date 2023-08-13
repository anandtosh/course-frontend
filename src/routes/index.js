import React, { useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes as AllRoutes } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import { FloatingButton } from './FloatingButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useThemeStore } from '../stores';
import PrivateRoutes from './PrivateRoutes';
import NotFoundComponent from '../pages/not_found';
import App from '../App';

const Routes = () => {

  return (
    <Router>
      <AllRoutes>
        <Route element={<App />}>
          <Route path="app/*" element={<PrivateRoutes />} />
          <Route path='/*' element={<PublicRoutes />} />
          {/* <Route path="*" element={<NotFoundComponent />} /> */}
        </Route>
      </AllRoutes>
    </Router>
  );
};

export default Routes;
