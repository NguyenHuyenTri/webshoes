import React from "react";
import PanelHeader from "components/Admin/PanelHeader/PanelHeader";

import {Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import ScrollData from "../ScrollData";
import {dataScrollWoman} from "variables/slide";
import {productList} from "variables/product";

const dataConfig = {
    tempData:dataScrollWoman,
    tempProduct:productList,
    tempLocal:'localScrollWoman',
    templeTitle:'Featured Footwear Woman',
}
export default function PageWoman() {


    return(
        <>
            <PanelHeader
                content={
                    <div className="header text-center">
                        <h2 className="title">Men Page Management</h2>
                    </div>
                }
            />
            <div className="content">
                <Row>
                    <Col xs={12} className='mb-0'>
                        <ScrollData {...dataConfig}/>
                    </Col>
                    <Col xs={12}>
                        <Accordion >
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">
                                        <Accordion.Toggle size='sm' as={CardTitle} variant="link" eventKey="0">
                                            Slide Home!
                                        </Accordion.Toggle>
                                        <Button className='ml-3 btn-primary'  size='sm'>
                                            <i className="now-ui-icons ui-1_simple-add"></i>
                                            {' '}New</Button>
                                    </CardTitle>
                                </CardHeader>
                                <Accordion.Collapse eventKey="0" >
                                    <CardBody className="all-icons">
                                        <Table responsive hover>
                                            <thead className="text-primary">
                                            <tr className='text-center'>
                                                <th>#</th>
                                                <th>Brand</th>
                                                <th>Name</th>
                                                <th>Title</th>
                                                <th>Image</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </Table>
                                    </CardBody>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </>
    )
}