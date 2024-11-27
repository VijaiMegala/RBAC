import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  // If there's no token, navigate to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the token exists, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
