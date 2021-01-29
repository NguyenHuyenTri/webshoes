import React, {Component} from "react";
import Header from "components/Website/Header/Header";
import Footer from "components/Website/Footer/Footer";
import 'static/website/css/header.css'
import routes from "routes/routesWebsite";

import {Redirect, Route, Switch} from "react-router-dom";

export default class Website extends Component{
    render() {
        return(
            <>
                <Header {...this.props} />
                <div className='w-100 post-slide' >
                    <Switch>
                        {routes.map((prop, key) => {
                            return (
                                <Route
                                    path={prop.layout + prop.path}
                                    component={prop.component}
                                    key={key}
                                />
                            );
                        })}
                        <Redirect from="/locfuho" to="/locfuho/ " />
                    </Switch>
                       <Footer className='mt-1 footer-product' />
                </div>
            </>
        )
    }
}