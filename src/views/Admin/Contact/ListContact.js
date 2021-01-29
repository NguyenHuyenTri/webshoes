import React, {useState} from "react";
import PanelHeader from "components/Admin/PanelHeader/PanelHeader";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import {dataContact} from "variables/contact";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";

export default function ListContact() {

    const [contactList]=useState(dataContact)
    const [show, setShow] = useState(false);
    const [contactDetail,setContactDetail]=useState([]);
    
    const viewOrder = (data,event) =>{
        setShow(true);
        let dataObj = dataContact[data];
        let x = []
        x.push(dataObj);
        setContactDetail(x);
        event.preventDefault();
        if(dataObj.isStatus === "false"){
          dataObj.isStatus = "true";
          console.log(dataContact);
          localStorage.setItem('localContact',JSON.stringify(dataContact));
        }
    }
    
    return(
        <>
            <PanelHeader
                content={
                    <div className="header text-center">
                        <h2 className="title">List Contact</h2>
                    </div>
                }
            />
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Accordion defaultActiveKey='0' >
                            <Card >
                                <CardHeader>
                                    <CardTitle tag="h4">
                                        <Accordion.Toggle size='sm' as={CardTitle} variant="link" eventKey="0">

                                        </Accordion.Toggle>
                                    </CardTitle>
                                </CardHeader>
                                <Accordion.Collapse eventKey="0">
                                    <CardBody className="all-icons">
                                        <Table responsive hover>
                                            <thead className="text-primary">
                                            <tr className='text-center'>
                                                <th>#</th>
                                                <th>Full Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Title</th>
                                                <th>Details</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {contactList.map((props,index)=>{
                                                return(
                                                    <tr key={index} className='text-center'>
                                                        <td >{index}</td>
                                                        <td >{props.fullName}</td>
                                                        <td >{props.email}</td>
                                                        <td >{props.phone}</td>
                                                        <td >{props.title}</td>
                                                        <td className="text-right" width='150px'>
                                                            <Button size='sm' outline color="danger"
                                                                    className='mb-1 mb-lg-0'
                                                                    onClick={viewOrder.bind(this,index)}
                                                            >
                                                                <FontAwesomeIcon  icon={faEye}/>
                                                            </Button>{' '}
                                                            <Button size='sm' outline color="danger"
                                                                    className='mb-1 mb-lg-0 '>
                                                                <FontAwesomeIcon  icon={faTrash}/></Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </div>
            <Modal
                show={show}
                onHide={()=>setShow(false)}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    {/*<Modal.Title>Product Order</Modal.Title>*/}
                </Modal.Header>
                <Modal.Body>
                    <Table responsive hover>
                        {contactDetail.map((props,index)=>{
                            return(
                              <tbody key={index}>
                                <tr>
                                  <th>Full Name</th>
                                  <td >{props.fullName}</td>
                                </tr>
                                <tr> 
                                  <th>Email</th>
                                  <td >{props.email}</td>
                                </tr>
                                <tr>
                                <th>Phone</th>
                                  <td >{props.phone}</td>
                                </tr>
                                <tr>
                                <th>Title</th>
                                  <td>{props.title}</td>
                                </tr>
                                <tr>
                                <th>Content</th>
                                  <td>{props.content}</td>
                                </tr>
                              </tbody>
                            )
                        })}
                        
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Understood</Button>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}