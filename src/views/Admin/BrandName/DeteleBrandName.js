import {brandNameList, gender} from "variables/data";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import React from "react";

export default function DeteleBrandName(props) {

    const deteleBrandName = () =>{
        if (props.id>=0){
            if (props.status==='brandname')
            {
                brandNameList.splice(props.id,1)
                localStorage.setItem("localBrandName",JSON.stringify(brandNameList));
            }else {
                gender.splice(props.id,1)
                localStorage.setItem("localGender",JSON.stringify(gender));
            }
            setTimeout(()=> props.onHide(false),1000);
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
                        <>
                            Detele Brand  <strong className='text-danger'>{brandNameList[props.id]}</strong>
                        </>:
                        <>
                            Detele Gender  <strong className='text-danger'>{gender[props.id]}</strong>
                        </>
                    }

                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{'padding':'0'}}>
                <p className='text-center mb-0'>
                    <Button className='text-center '  onClick={deteleBrandName}>OK</Button>
                </p>

            </Modal.Body>

        </Modal>
    );
}