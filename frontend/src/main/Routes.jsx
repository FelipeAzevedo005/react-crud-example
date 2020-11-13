import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import UserCRUD from "../components/user/UserCRUD";

function Routes(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/users" component={UserCRUD}></Route>
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default Routes;