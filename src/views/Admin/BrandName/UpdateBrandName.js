import React, {useEffect, useState} from "react";
import {brandNameList,gender} from "variables/data";
import Modal from "react-bootstrap/Modal";
import {Col, Form, FormText, Input, Row} from "reactstrap";
import FormGroup from "reactstrap/es/FormGroup";
import {Button} from "react-bootstrap";
export default function UpdateBrandName(props) {

    const [id,setId]=useState()
    useEffect(()=>{
            setId(props.id)
            setMessageBrandName('')
    },[props.id])

    const [brandName,setBrandName]=useState('')
    const [invalidBrandName,setInvalidBrandName]=useState(true)
    const [messageBrandName,setMessageBrandName]=useState('')
    const [color,setColor]=useState('')

    const handleChangeBrandName =(event)=>{
        if (event.target.value.length >=3 && event.target.value !==props.brand ){
            setBrandName(event.target.value)
            setInvalidBrandName(false)
            setMessageBrandName('Amazing Goog Job')
            setColor('')
        }else {
            setInvalidBrandName(true)
            setMessageBrandName('Please Enter Or Cancel')
            setColor('red')
        }

    }

    const saveBrandName = () =>{
        if (invalidBrandName===false&&brandName!=='SELECT BRAND NAME'){
            setBrandName(brandName)

            if (props.status==='brandname'){
                var brandNameListad = []
                brandNameListad = brandNameList;
                brandNameListad.push(brandName);
                localStorage.setItem('localBrandName',JSON.stringify(brandNameListad));
            }else {
                var genderListAd = []
                genderListAd=gender;
                genderListAd.push(brandName);
                localStorage.setItem('localGender',JSON.stringify(genderListAd));
            }

            setMessageBrandName('Add Success')
            setColor('')
            setBrandName('')
            setTimeout(()=>props.onHide(false),1000);
        }else {
            setMessageBrandName('Please Enter Or Cancel')
            setColor('red')
        }
    }
 
    const updateBrandName = ()=>{
        if (invalidBrandName===false&&brandName!=='SELECT BRAND NAME'){

            if (props.status==='brandname'){
                var brandNameListad = []
                brandNameListad = brandNameList;
                brandNameListad[props.id]=brandName;
                localStorage.setItem('localBrandName',JSON.stringify(brandNameListad));

            }else {
                var genderListAd = []
                genderListAd=gender;
                genderListAd[props.id]=brandName;
                localStorage.setItem('localGender',JSON.stringify(genderListAd));
            }
            setBrandName('')
            setMessageBrandName('Update Success')
            setColor('')
            setTimeout(()=>props.onHide(false),1000)
        }else {
            setMessageBrandName('Please Enter Or Cancel')
            setColor('red')
        }
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.status==='brandname'?
                        <> {props.id!==null?'Update Brand Name':'Add Brand Name'}</>:
                        <> {props.id!==null?'Update Gender Name':'Add Gender Name'}</>
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md="12" className='my-1'>
                            <FormGroup>
                                <Input
                                    type="text"
                                    defaultValue={props.brand} name='brandName'
                                    onChange={handleChangeBrandName}
                                    invalid={invalidBrandName}>
                                </Input>
                                <FormText className={color ? 'text-danger' :'text-success'}>{messageBrandName}</FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={id===null?saveBrandName:updateBrandName}>Save </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}