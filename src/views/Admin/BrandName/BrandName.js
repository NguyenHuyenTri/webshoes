import React, { useState} from "react";
import {Row, Col, Card, CardHeader, CardBody, } from "reactstrap";
import PanelHeader from "components/Admin/PanelHeader/PanelHeader.js";
import Table from "react-bootstrap/Table";
import {brandNameList, gender} from "variables/data";
import CardTitle from "reactstrap/es/CardTitle";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import DeteleBrandName from 'views/Admin/BrandName/DeteleBrandName'
import UpdateBrandName from "views/Admin/BrandName/UpdateBrandName";



export default function FullScreenMap () {
  const [modalShow, setModalShow] =useState(false);
  const [modalShow1, setModalShow1] =useState(false);
  const [brandName,setBrandName]=useState('');
  const [id,setId]=useState('')
  const [status,setStatus] =useState('');




  const newBrandName = () =>{
      setModalShow(true)
      setId(null)
      setBrandName('')
      setStatus('brandname')
  }
  const newGender= () =>{
    setModalShow(true)
    setId(null)
    setBrandName('')
    setStatus('gendername')
  }

  const updateGenderName= (key) =>{
      if (gender[key]!==null){
          setBrandName(gender[key]);
          setModalShow(true);
          setStatus('gendername')
          setId(key)
      }
  }
  const updateBrandName = (key) =>{
      if (brandNameList[key]!==null){
        setBrandName(brandNameList[key]);
        setModalShow(true)
        setStatus('brandname')
        setId(key)
      }
  }
  const deteleGenderName =(key) =>{
    if (key!==null){
      setId(key)
      setModalShow1(true)
      setStatus('gendername')
    }
  }
  const deteleBrandName = (key) =>{
      if (key!==null){
          setId(key)
          setModalShow1(true)
          setStatus('brandname')
      }

  }

    return (
      <>
        <PanelHeader
            content={
              <div className="header text-center">
                <h2 className="title">Brand And Gender</h2>
              </div>
            }
        />
        <div className="content" >
          <Row>
                    <Col xs={12} md={6}>
                      <Card>
                        <CardHeader>
                          <Row>
                              <div className="col-9">
                                <CardTitle tag="h4">All Brand Name List</CardTitle>
                              </div>
                            <div className="col-3">
                              <Button  className='btn' size="sm" onClick={newBrandName}>New{' '}
                                <i className="now-ui-icons ui-1_simple-add" style={{fontSize:'13px'}}>
                                </i></Button>
                            </div>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <Table responsive>
                            <thead className="text-primary">
                            <tr>
                              <th>#</th>
                              <th>Brand Name</th>
                              <th className="text-right"></th>
                              <th className="text-right"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {brandNameList.map((prop,index)=>{
                              return(
                                  <tr key={index}>
                                    <td>{index}</td>
                                    <td>{prop}</td>
                                    <td className="text-right" >
                                      <Button variant="outline-primary" size="sm"
                                              onClick={updateBrandName.bind(this,index)} className='btn'>
                                        <FontAwesomeIcon  icon={faEdit}/>{' '}
                                      </Button>{' '}
                                      <Button variant="outline-danger" size="sm"
                                             onClick={deteleBrandName.bind(this,index)} className='btn'>
                                        <FontAwesomeIcon  icon={faTrash}/>{' '}
                                      </Button>
                                      </td>
                                  </tr>
                              )
                            })}
                            </tbody>
                          </Table>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6}>
                      <Card>
                        <CardHeader>
                          <Row>
                            <div className="col-9">
                              <CardTitle tag="h4">All Gender Name List</CardTitle>
                            </div>
                            <div className="col-3">
                              <Button  className='btn' size="sm" onClick={newGender}>New{' '}
                                <i className="now-ui-icons ui-1_simple-add" style={{fontSize:'13px'}}>
                                </i></Button>
                            </div>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <Table responsive>
                            <thead className="text-primary">
                            <tr>
                              <th>#</th>
                              <th>Gender</th>
                              <th className="text-right"></th>
                              <th className="text-right"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {gender.map((prop,index)=>{
                              return(
                                  <tr key={index}>
                                    <td>{index}</td>
                                    <td>{prop}</td>
                                    <td className="text-right" >
                                      <Button variant="outline-primary" size="sm" className='btn'
                                        onClick={updateGenderName.bind(this,index)} >
                                        <FontAwesomeIcon  icon={faEdit}/>{' '}
                                      </Button>{' '}
                                      <Button variant="outline-danger" size="sm" className='btn'
                                              onClick={deteleGenderName.bind(this,index)}>
                                        <FontAwesomeIcon  icon={faTrash}/>{' '}
                                      </Button>
                                    </td>
                                  </tr>
                              )
                            })}
                            </tbody>
                          </Table>
                        </CardBody>
                      </Card>
                    </Col>

                  </Row>
          <UpdateBrandName
              show={modalShow} brand={brandName} id={id} status={status}
              onHide={() => setModalShow(false)}
          />
          <DeteleBrandName show={modalShow1} id={id} status={status} onHide={() => setModalShow1(false)}/>
        </div>
      </>
    );
}

