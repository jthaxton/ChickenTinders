import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./home_page/components/home_page";
import Auth from "./auth/components/auth";
import Dashboard from './dashboard/components/dashboard';
import Profile from './profile/components/profile';

 const Routes = () => {
    return (
    <Router>
        <div>
            <Route path={"/"} component={HomePage}/>
            <Route path={"/"} component={Auth}/>
            <Route path={"/dashboard"} component={Dashboard} />
            <Route path={"/profile"} component={Profile} />
        </div>
    </Router>
    );
}
export default Routes;
