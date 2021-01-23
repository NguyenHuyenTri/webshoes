
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
    Alert,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    Row,
    Col,
    Button,
} from "reactstrap";
import 'static/assets/css/slide.css'
// core components
import PanelHeader from "components/Admin/PanelHeader/PanelHeader.js";
import Nav from "react-bootstrap/Nav";
import {NavItem} from "react-bootstrap";

export default  function Slide() {
    
        return (
            <>
                <PanelHeader
                    content={
                        <div className="header text-center">
                            <h2 className="title">Notifications</h2>

                        </div>
                    }
                />
                <div className="content">
                    <Row>
                        <Col md={12} className='nav-slide, bgr' >
                            <Nav justify className="flex-row">
                               <Nav.Item>
                                   <button className='nav-button btn btn-primary slide-button' eventKey="#home">Men</button>
                               </Nav.Item>
                                <Nav.Item>
                                    <button className='nav-button btn btn-primary slide-button' eventKey="#woman">Woman</button>
                                </Nav.Item>
                                <Nav.Item>
                                    <button className='nav-button btn btn-primary slide-button'>Kid</button>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </>
        );
}

