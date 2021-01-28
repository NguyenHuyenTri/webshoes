import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "static/assets/css/demo.css";
import "bootstrap/dist/css/bootstrap.css";
import "static/assets/scss/now-ui-dashboard.scss?v1.4.0";

import AdminLayout from "layouts/Admin";

import WebsiteLayout from "layouts/Website"
import Login from "./views/Login/Login";
// import Test from "components/image/image";

const hist = createBrowserHistory();

function App () {

    return(
        <Router history={hist}>
            <Switch>
                     <Route path="/locfuho/" render={(props) => <WebsiteLayout {...props} />} />
                        <Route path="/login" render={(props) => <Login {...props} />} />
                {/*<Route path="/test" render={(props) => <Test {...props} />} />*/}
                     <Route path="/admin/" render={(props) => <AdminLayout {...props} />} />
                     <Redirect from="/" to="/locfuho/" />

            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <App/>,
  document.getElementById("root")
);



