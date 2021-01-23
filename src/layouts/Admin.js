import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";
import DemoNavbar from "components/Admin/Navbars/DemoNavbar.js";
import Footer from "components/Admin/Footer/Footer.js";
import Sidebar from "components/Admin/Sidebar/Sidebar.js";
import FixedPlugin from "components/Admin/FixedPlugin/FixedPlugin.js";
import routes from "routes/routesAdmin";
import Login from "views/Login/Login";
import {userToken} from "../views/Login/useToken";

var ps;
var backgroundColor =localStorage.getItem('backgroundColor');

if (backgroundColor===null){
  backgroundColor = "orange"
  localStorage.setItem('backgroundColor', backgroundColor);
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: backgroundColor,
      token:userToken
    }
  }
  mainPanel = React.createRef();
  componentDidMount() {
        if (this.state.token)
          if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.mainPanel.current);
            document.body.classList.toggle("perfect-scrollbar-on");
          }
  }
  componentWillUnmount() {
    if (this.state.token)
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (this.state.token)
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }
  handleColorClick = (color) => {
    this.setState({backgroundColor: color});
  }
  ;


  render() {

      const {token}=this.state;

      if (!token){
         return <Login  />
      }


      return (
          <>
            <div className="wrapper">
              <Sidebar
                  {...this.props}
                  routes={routes}
                  backgroundColor={this.state.backgroundColor}
              />
              <div className="main-panel" ref={this.mainPanel}>
                <DemoNavbar {...this.props} />
                <Switch>
                  {routes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.layout + prop.path}
                            component={prop.component}
                            color={this.state.backgroundColor}
                            key={key}
                        />
                    );
                  })}
                  <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
                <Footer fluid />
              </div>
              <FixedPlugin
                  bgColor={this.state.backgroundColor}
                  handleColorClick={this.handleColorClick}
              />
            </div>
          </>
      );
    }
}

export default Dashboard;
