import React, { useState, useEffect }from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import 'static/website/css/contact/contact.css'
import { NavLink, Row, Col, Form, Button,Textarea,FormControl } from "react-bootstrap";

function FormError(props) {
  /* nếu isHidden = true, return null ngay từ đầu */
  if (props.isHidden) { return null;}

  return ( <div>{props.errorMessage}</div>)
}
export default function Contact() {
  // const [value, isInputValid,errorMessage] = useState();
  // check value data
  const { register, handleSubmit } = useForm({
    defaultValues:{
      fullName:"",
      email:"",
      phone:"",
      title:"",
      content:"",
      isStatus:"1"
    }
  });
  const [dataForm, setDataForm] = useState();
  // lưu data
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <div className="main-contact m-5">
        <Row>
          <Col md={6} sm={12}>
            <div className="mt-5">
              <img className="mt-4"src="https://d3pbdh1dmixop.cloudfront.net/spark/Blog/spark-mail-arrives-on-android/Spark%20-%20Features.png"/>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group ontrolId="customerName">
                <Form.Control type="text" name="fullName" placeholder="Enter Name" ref={register} />
              </Form.Group>
              <Form.Group controlId="customerEmail">
                <Form.Control type="email" name="email" placeholder="Enter email" ref={register} />
              </Form.Group>
              <Form.Group controlId="customerPhone">
                <Form.Control type="phone" name="phone" placeholder="Enter phone number" ref={register} />
              </Form.Group>
              <Form.Group controlId="customerTitle">
                <Form.Control type="text" name="title" placeholder="Enter Title" ref={register} />
              </Form.Group>
              <Form.Group controlId="ControlTextarea1">
                <Form.Control as="textarea" name="content" placeholder="Enter Text" ref={register} />
              </Form.Group>
              <Form.Group hidden>
                <Form.Control name="isStatus" ref={register}  value="1"/>
              </Form.Group>
              <p id="textValidate"></p>
              {/* <FormError isHidden={this.state.isInputValid} errorMessage={this.state.errorMessage}></FormError> */}
              <Button variant="success" type="submit">
                Send <i class="fas fa-arrow-circle-right"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  )
}