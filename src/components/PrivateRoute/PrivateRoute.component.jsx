import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
//solution based on https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
const PrivateRoute = () => {
  let authToken = sessionStorage.getItem('Auth Token');

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page\
    <>
    {authToken ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
};

export default PrivateRoute;
