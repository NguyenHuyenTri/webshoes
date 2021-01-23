import React from "react";
import { Row} from "react-bootstrap";
import {formatNumber} from 'views/to_slug'

export default function Data(props) {

    console.log(props.sale)
        return(
            <>
                {props.productList.map((prop ,index)=>{
                    return(
                        <div key={index} className='col-12 col-md-6 col-lg-4 p-2' >
                            <div className="moreShow" >
                                <img height='500px' width='500px' className='img-fluid box-shadow single-trending-post ' src={prop.image} alt=''/>
                                <Row className='mt-3'>
                                    <div className='col-12'>
                                        <h5  style={{'fontSize':'15px'}} className='text-left ml-4 mb-1'>{prop.productName}</h5>
                                        <p style={{'fontSize':'14px','color':'#6c757d'}} className='text-left ml-4'>{prop.gender}</p>
                                            <Row style={{'fontSize':'15px'}}>
                                                    <div className="col-3">
                                                            <p  style={{textDecoration: props.sale ===true ?'line-through':''}}
                                                                className='text-left ml-4 mt-2 text-dark'>{formatNumber(prop.price)}</p>
                                                    </div>
                                                    <div className="col-6">
                                                            <p  style={{display:props.sale===true?'block':'none'}} className='text-left mt-2 text-dark'>{formatNumber(prop.originalPrice)}</p>
                                                    </div>
                                            </Row>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    )
                })}
                </>
        )
}