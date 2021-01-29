import React, { useRef}from "react";
import { useForm } from "react-hook-form";
import 'static/website/css/contact/contact.css'
import NotificationAlert from "react-notification-alert";
import { Row, Col, Form, Button, } from "react-bootstrap";
import {dataContact} from "variables/contact";
export default function Contact() {
  const notificationAlert =useRef(null);
  const Alert = (status,message) =>{
    let options = {};
    options = {
        place: 'tr',
        message: (
            <div>
                <div>
                    {status} <b>{message}</b>
                </div>
            </div>
        ),
        type: 'success',
        icon: "now-ui-icons ui-1_bell-53",
        autoDismiss: 3,
    };
    notificationAlert.current.notificationAlert(options);
}
  // check value data
  const { register, errors, handleSubmit } = useForm({
    defaultValues:{
      fullName:"",
      email:"",
      phone:"",
      title:"",
      content:"",
      isStatus:"false"
    }
  });
  // lưu data
  const onSubmit = data => {
      dataContact.push(data);
     localStorage.setItem('localContact',JSON.stringify(dataContact));
     Alert("","Sen to admin success");
  };
  return (
    <>
    <NotificationAlert ref={notificationAlert} />
      <div className="main-contact m-5">
        <Row>
          <Col md={6} sm={12}>
            <div className="mt-5">
              <img className="mt-4"src="https://d3pbdh1dmixop.cloudfront.net/spark/Blog/spark-mail-arrives-on-android/Spark%20-%20Features.png"
                alt=''/>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group >
                <Form.Control type="text" name="fullName" placeholder="Enter Name" ref={register({ required: true })} />
                <p className="textvalidate"> {errors.fullName && "Name is required"} </p>
              </Form.Group>
              <Form.Group >
                <Form.Control type="email" name="email" placeholder="Enter email" ref={register({ required: true })} />
                <p className="textvalidate"> {errors.email && "Email is required"} </p>
              </Form.Group>
              <Form.Group >
                <Form.Control type="phone" name="phone" placeholder="Enter phone number" ref={register({ required: true })} />
                <p className="textvalidate"> {errors.phone && "Phone is required"} </p>
              </Form.Group>
              <Form.Group >
                <Form.Control type="text" name="title" placeholder="Enter Title" ref={register({ required: true })} />
                <p className="textvalidate"> {errors.title && "Title is required"} </p>
              </Form.Group>
              <Form.Group >
                <Form.Control as="textarea" name="content" placeholder="Enter Text" ref={register({ required: true })} />
                <p className="textvalidate"> {errors.content && "Cotent is required"} </p>
              </Form.Group>
              <Form.Group hidden>
                <Form.Control name="isStatus" ref={register}  />
              </Form.Group>
              <Button variant="success" type="submit">
                Send <i className="fas fa-arrow-circle-right"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  )
}