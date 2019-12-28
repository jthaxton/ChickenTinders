import React from 'react';
import LandingPage from './landing_page/components/landing_page';
import Login from './auth/components/login';
import Register from './auth/components/register';
import {AuthRoute, ProtectedRoute} from './private_route';
import Dashboard from './dashboard/components/dashboard';
import NavBar from './home_page/components/nav_bar';
import Profile from './profile/components/profile';
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <AuthRoute exact path="/login" component={Login}/>
      <AuthRoute exact path="/register" component={Register} />
      <ProtectedRoute exact path="/" component={LandingPage}/>
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/profile" component={Profile} />

    </>
  )
}

export default App;
