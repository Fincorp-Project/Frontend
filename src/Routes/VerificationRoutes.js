// routes/HomeRoute.js
import React from 'react';
import { Route } from 'react-router-dom';
import Verification from '../pages/Verification';
import CreatePassword from '../pages/CreatePassword';

const VerificationRoute = () => {
  return (
    <Route  path="/" component={Verification} />
    // <Route exact path="/create/password" component={CreatePassword} />
    
  );
};

export default VerificationRoute;
