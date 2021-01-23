import React from "react";
import logo from 'static/img/core-img/logo4.png'
import { Navbar, NavbarBrand, NavbarToggler,
    Collapse, Nav, NavItem, NavLink,
    DropdownToggle, DropdownMenu, DropdownItem  ,Form ,ButtonDropdown} from 'reactstrap';

import 'static/website/classy-nav.css';
import nike from 'static/img/brandName/nike.png'
import adidas from 'static/img/brandName/adidas.png'
import bitis from 'static/img/brandName/bitis.png'
import {Link} from "react-router-dom";

import 'hover.css/css/hover.css'



export  default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    dropdownToggle(e){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
       render() {
        const {isOpen} =this.state;
           return(
               <>
                   <Navbar expand="lg"  color={"white"} className='header mb-0 mt-0'>
                       <NavbarBrand href='/locfuho/' className="nav-brand ml-3 hvr-wobble-vertical ">
                                   <img src={logo} alt=""/>
                       </NavbarBrand>
                       <NavbarToggler onClick={this.toggle}>
                                {isOpen === false ?
                                    <>
                                        <div className="classy-navbar-toggler " style={{'display':'block'}}>
                                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                                        </div>
                                    </> :
                                    <>
                                        <div className="classy-navbar-toggler" style={{'display':'block'}}>
                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                        </div>
                                    </>
                                }
                       </NavbarToggler>
                       < Collapse isOpen={this.state.isOpen} navbar>
                                   <Nav className='ml-auto colornav'   >
                                       <NavItem >
                                           <NavLink href="/locfuho/men" className='hvr-float-shadow'>
                                               MEN
                                           </NavLink>
                                       </NavItem>
                                       <NavItem>
                                           <NavLink href="/locfuho/woman"className='hvr-float-shadow'>
                                               WOMAN
                                           </NavLink>
                                       </NavItem>
                                       <NavItem>
                                           <ButtonDropdown  navbar="true" tag="nav" isOpen={this.state.dropdownOpen} toggle={(e) => this.dropdownToggle(e)}>
                                               <DropdownToggle caret nav color="primary" className='hvr-float-shadow'>
                                                   BRANDS
                                               </DropdownToggle>
                                               <DropdownMenu color="info">
                                                   <DropdownItem href="/locfuho/men" tag="a"><img src={nike} alt=''  width='25px' height='25px'/> NIKE</DropdownItem>
                                                   <DropdownItem href="/locfuho/men" tag="a"><img src={adidas} alt=''  width='25px' height='25px'/> ADIDAS</DropdownItem>
                                                   <DropdownItem  href="/locfuho/men" tag="a"><img src={bitis} alt=''  width='25px' height='25px'/> BITI'S</DropdownItem>
                                               </DropdownMenu>
                                           </ButtonDropdown >
                                       </NavItem>
                                       <NavItem>
                                           <NavLink href="/locfuho/kid" className='hvr-float-shadow'>
                                               KID
                                           </NavLink>
                                       </NavItem>
                                       <NavItem>
                                           <NavLink href="/locfuho/sale" className='hvr-float-shadow'>
                                               SALE
                                           </NavLink>
                                       </NavItem>
                                   </Nav>
                                   <Form inline  className="ml-auto hvr-float-shadow searchTop">
                                       <div className="no-border input-group">
                                           <input name="searchData" placeholder="Search..." type="text"
                                                  className="form-control " />

                                           <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="now-ui-icons ui-1_zoom-bold"></i>
                                        </span>
                                           </div>
                                       </div>
                                   </Form>
                                    <Nav>
                                        <NavItem className=''>
                                            <Link to="/login" className="nav-link hvr-float-shadow">
                                           <i className="now-ui-icons users_single-02" />{' '}
                                           <p>
                                               <span className="d-lg-none d-md-block ">Account</span>
                                           </p>
                                            </Link>
                                        </NavItem>
                                    </Nav>
                       </Collapse>
                   </Navbar>
               </>
           )
       }
}

// <NavbarToggler onClick={this.toggle}>
//     {isOpen === false ?
//         <>
//             <span className="navbar-toggler-bar navbar-kebab" />
//             <span className="navbar-toggler-bar navbar-kebab" />
//             <span className="navbar-toggler-bar navbar-kebab" />
//         </>:
//         <span className="now-ui-icons ui-1_simple-remove"></span>
//     }
// </NavbarToggler>