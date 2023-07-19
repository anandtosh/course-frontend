import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import { FloatingButton } from './FloatingButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useThemeStore } from '../stores/useThemeStore';

const Routes = () => {
  const {theme} = useThemeStore()
  return (
    <Router>
      <PublicRoutes />
      <FloatingButton/>
      <ToastContainer 
        position='bottom-right'
        theme={`${theme == 'dark' ? 'light' : 'dark'}`}
      />
    </Router>
  );
};

export default Routes;
