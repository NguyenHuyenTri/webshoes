import React, {useState} from "react";
import {Form, Row} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {brandNameList} from "variables/data";

export default function SideBar(props) {

    const [value,setValue]=useState('');

    const [isOpen1, setOpen1] = useState(true);
    const [isOpen2, setOpen2] = useState(true);
    const [isOpen3, setOpen3] = useState(true);
    const [isOpen4, setOpen4] = useState(true);
    const [isOpen5, setOpen5] = useState(true);
    const toggleItemM1 = () => setOpen1(!isOpen1);
    const toggleItemM2 = () => setOpen2(!isOpen2);
    const toggleItemM3 = () => setOpen3(!isOpen3);
    const toggleItemM4 = () => setOpen4(!isOpen4);
    const toggleItemM5 = () => setOpen5(!isOpen5);


    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }


    const [checked1, setChecked1] = useState(false)
    const handleClick1 = () => setChecked1(!checked1)

    const handlChangeCheckbox = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value)
        console.log(name)
    }

    //data
    const gender =["Men","Woman"]
    const kid = ["Boys","Girls"]
    const feature = ['Nike Air Max ','Hunter' ,'UltraBoost','Superstar']
    const size =[]
    for (let i=28; i <=45 ; i++){
        size.push(i);
    }

    return(

            <Form style={{display : props.status ===true ?'block':'none'}}>
                <Accordion >
                    <Accordion.Toggle  as={Card.Header}  >
                        <Row onClick={toggleItemM1}>
                            <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                Gender
                            </div>

                            <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                {isOpen1===false ?
                                    <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                    <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                }
                            </div>
                        </Row>
                    </Accordion.Toggle>
                    {
                        gender.map((prop,index)=>{
                            return(
                                <Accordion.Collapse   key={index} className={isOpen1===false?'':'show'}  >
                                    <Card.Body  >
                                        <Form.Check
                                            custom
                                            type='checkbox'
                                            id={`custom-gender-${prop}`}
                                            label={prop}
                                            name={prop}
                                            onChange={handlChangeCheckbox}
                                        />
                                    </Card.Body>
                                </Accordion.Collapse>
                            )
                        })
                    }
                </Accordion>
                <Accordion  >
                    <Accordion.Toggle  as={Card.Header} onSelect={handleSelect}  >
                        <Row onClick={toggleItemM2}>
                            <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                Kid's
                            </div>

                            <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                {isOpen2===false ?
                                    <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                    <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                }
                            </div>
                        </Row>
                    </Accordion.Toggle>
                    {kid.map((prop ,index)=>{
                        return(
                            <Accordion.Collapse key={index} className={isOpen2===false?'':'show'}  >
                                <Card.Body onClick={handleClick1}  >
                                    <Form.Check
                                        custom
                                        type='checkbox'
                                        id={`custom-kid-${index}`}
                                        label={prop}
                                        name={prop}
                                        onChange={handlChangeCheckbox}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        )
                    })}

                </Accordion>
                <Accordion  >
                    <Accordion.Toggle  as={Card.Header} onSelect={handleSelect}  >
                        <Row onClick={toggleItemM4}>
                            <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                Brands
                            </div>

                            <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                {isOpen4===false ?
                                    <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                    <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                }
                            </div>
                        </Row>
                    </Accordion.Toggle>

                    {brandNameList.map((prop ,index)=>{
                        return(
                            <Accordion.Collapse key={index} className={isOpen4===false?'':'show'}  >
                                <Card.Body  >
                                    <Form.Check
                                        custom
                                        type='checkbox'
                                        id={`custom-brand-${index}`}
                                        label={`${prop}`}
                                        name={prop}
                                        onChange={handlChangeCheckbox}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        );
                    })}
                </Accordion>
                <Accordion  >
                    <Accordion.Toggle   as={Card.Header} onSelect={handleSelect}  >
                        <Row onClick={toggleItemM3}>
                            <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                Size
                            </div>

                            <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                {isOpen3===false ?
                                    <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                    <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                }
                            </div>
                        </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse className={isOpen3===false?'':'show'}  >
                        <Card.Body   >
                            {size.map((prop, index) =>{
                                return(
                                    <Form.Check
                                        key={index}
                                        inline
                                        custom
                                        type='checkbox'
                                        id={`checkbox-size-${prop}`}
                                        label={prop}
                                        name={prop}
                                        className='mb-2'
                                        onChange={handlChangeCheckbox}
                                    />
                                )
                            })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
                <Accordion  >
                    <Accordion.Toggle  as={Card.Header} onSelect={handleSelect}  >
                        <Row onClick={toggleItemM5}>
                            <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                Feature
                            </div>

                            <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                {isOpen5===false ?
                                    <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                    <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                }
                            </div>
                        </Row>
                    </Accordion.Toggle>

                    {feature.map((prop ,index)=>{
                        return(
                            <Accordion.Collapse key={index} className={isOpen5===false?'':'show'}  >
                                <Card.Body  >
                                    <Form.Check
                                        custom
                                        type='checkbox'
                                        id={`custom-feature-${index}`}
                                        label={`${prop}`}
                                        name={prop}
                                        onChange={handlChangeCheckbox}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        );
                    })}
                </Accordion>
            </Form>
    )
}