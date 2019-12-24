import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./home_page/components/home_page";
import Auth from "./auth/components/auth";

 const Routes = () => {
    return (
    <Router>
        <div>
            <Route path={"/"} component={HomePage}/>
            <Route path={"/"} component={Auth}/>
        </div>
    </Router>
    );
}
export default Routes;
