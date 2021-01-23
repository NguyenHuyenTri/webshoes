import React from "react";
import { NavLink,Link } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo-white.svg";
import {Collapse,NavItem} from "reactstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      collapsed:false,
    }
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  toggleNavbar = ()=>{
    if (this.state.collapsed===true){
      this.setState({collapsed:false})
    }else {
      this.setState({collapsed:true})
    }
  }
  render() {
    const {collapsed} =this.state;
    return (
      <div className="sidebar" data-color={this.props.backgroundColor}>
        <div className="logo">
          <Link
              to={"/admin/dashboard"}
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </Link>
          <Link
              to={"/admin/dashboard"}
            className="simple-text logo-normal"
          >
            Shop LOCFUHO
          </Link>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav >
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.layout + prop.path) +
                    (prop.pro ? " active active-pro " : "")
                  }
                  key={key}
                >
                  <NavLink style={{"display":prop.display ? "" : "none"}}
                    to={prop.layout + prop.path}
                    className="nav-link "
                    activeClassName={prop.path===''? '' :'active'}

                  >
                          <i className={"now-ui-icons " + prop.icon} />
                          <p className='simple-text '>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
