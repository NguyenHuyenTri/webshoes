import React, {useState} from "react";
import PanelHeader from "components/Admin/PanelHeader/PanelHeader";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import {pay} from "variables/paybag";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";

console.log(pay)
export default function ListOrder() {

    const [payList]=useState(pay)
    const [show, setShow] = useState(false);
    const [bag,setBag]=useState([]);
    const viewOrder = (data,event) =>{
        setShow(true)
        let x = data;
        setBag(x);
        event.preventDefault()
    }

    console.log(bag)

    return(
        <>
            <PanelHeader
                content={
                    <div className="header text-center">
                        <h2 className="title">List Order</h2>
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
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Total</th>
                                                <th>Details</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {payList.map((props,index)=>{
                                                return(
                                                    <tr key={index} className='text-center'>
                                                        <td >{index}</td>
                                                        <td >{props.firstName}</td>
                                                        <td >{props.lastName}</td>
                                                        <td >{props.email}</td>
                                                        <td >{props.address}</td>
                                                        <td >{props.total}</td>
                                                        <td className="text-right" width='150px'>
                                                            <Button size='sm' outline color="danger"
                                                                    className='mb-1 mb-lg-0'
                                                                    onClick={viewOrder.bind(this,props.bag)}
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
                            <thead className="text-primary">
                            <tr className='text-center'>
                                <th>#</th>
                                <th>Brand Name</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Amout</th>
                                <th>Image
                                </th>
                                <th>Details</th>
                            </tr>
                            </thead>
                            <tbody></tbody>
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