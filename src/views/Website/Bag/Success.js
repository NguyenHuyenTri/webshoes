import React from "react";
import 'static/website/css/bag/success.css'
import {Button} from "react-bootstrap";
import {useHistory} from "react-router";


export default function Success() {

    let history =useHistory()

        const css ={
            borderRadius:'200px',
            height:'200px',
            width:'200px',
            background: '#F8FAF5',
            margin:'0 auto',
        }
        const continueSubmit = ()=>{
           setTimeout(()=>{
               history.push('/locfuho/all/product')
           },500)
        }

        return(
            <div className='success-card'>
                <div className="success-card-in">
                    <div style={css} >
                        <i className="checkmark">✓</i>
                    </div>
                    <h1 className='success-h1'>Success</h1>
                    <p className='success-p'>We received your purchase request<br/> we'll be in touch shortly!</p>
                    <Button className='add-black' onClick={continueSubmit}>Continue Shopping</Button>
                </div>
            </div>
        )
}