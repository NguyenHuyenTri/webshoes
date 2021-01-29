import React, {useEffect, useState} from "react";
import 'static/website/css/bag/pay.css'
import {useHistory} from "react-router";
import {bag} from "variables/bag";
import {pay} from "variables/paybag";
import Input from "reactstrap/es/Input";
import {FormGroup} from "reactstrap";
import {formatNumber} from "../../to_slug";
import Success from "./Success";

export default function Pay() {

    let history =useHistory()

    const [loadpay,setLoad]=useState(false);
    const [show,setShow]=useState(false)

    const [card]=useState(bag);
    const [total,setTotal]=useState('');
    const [fistsName,setFistName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const [checked,setChecked]=useState(false)
    //valid

    const [validFirstName,setValidFirstName]=useState(false)
    const [validLastName,setValidLastName]=useState(false)
    const [validEmail,setValidEmail]=useState(false)
    const [validAddress,setValidAddress]=useState(false)
    const [validName,setValidName]=useState(false)
    const [validChecked,setValidChecked]=useState(false)
    const [validNumber,setValidNumber]=useState(false)
    const [invalidFirstName,setInvalidFirstName]=useState(true)
    const [invalidLastName,setInvalidLastName]=useState(true)
    const [invalidAddress,setInvalidAddress]=useState(true)
    const [invalidEmail,setInvalidEmail]=useState(true)
    const [invalidName,setInvalidName]=useState(true)
    const [invalidNumber,setInvalidNumber]=useState(true)
    const [invalidChecked,setInvalidChecked]=useState(true)

    useEffect(()=>{
        let x = 0;
        if (card){

            card.filter((props)=>{
                x = x + (parseInt(props.price)*props.amount);
                return null
            })
            setTotal(x);
        }

        if (card.length===0){
            history.push('/locfuho/bag')
        }

    },[card,history])


    const closePay = (event) =>{
           setTimeout(()=>{
               history.push('/locfuho/bag')
           },500)
            event.preventDefault()
    }


    const submitPay = (event)=>{
        setLoad(true)
        if (invalidChecked!==true&&invalidName!==true&&invalidAddress!==true&&invalidEmail!==true
            &&invalidLastName!==true&& invalidFirstName!==true&&invalidNumber!==true){
            let x = pay;
            let totall = total;
            if (total<5000000){
                totall=total+300000
            }
            let tempPay = {
                firstName:fistsName,
                lastName:lastName,
                total:totall,
                email:email,
                address:address,
                bag:card,
            }
            x.unshift(tempPay)
            localStorage.setItem('localBag',JSON.stringify([]))
            localStorage.setItem('localPay',JSON.stringify(x))
            setTimeout(()=>{
                setLoad(false)
                setShow(true)
            },2000)
        }else {

            setTimeout(()=>{setLoad(false)},500)
            if (fistsName.length<=4){
                setValidFirstName(false)
                setInvalidFirstName(true)
            }else {
                setValidFirstName(true)
                setInvalidFirstName(false)
            }

            if (lastName.length<=4){
                setValidLastName(false)
                setInvalidLastName(true)
            }else {
                setValidLastName(true)
                setInvalidLastName(false)
            }

            if (email.length<=4){
                setValidEmail(false)
                setInvalidEmail(true)
            }else {
                setInvalidEmail(false)
                setValidEmail(true)
            }

            if (address.length<=8){
                setInvalidAddress(true)
                setValidAddress(false)
            }else {
                setValidAddress(true)
                setInvalidAddress(false)
            }

            if (name.length<=4){
                setValidName(false)
                setInvalidName(true)
            }else {
                setValidName(true)
                setInvalidName(false)
            }

            if (number.length===16){
                setValidNumber(true)
                setInvalidNumber(false)
            }else {
                setValidNumber(false)
                setInvalidNumber(true)
            }

            if (checked===true){
                setValidChecked(true)
                setInvalidChecked(false)
            }else {
                setValidChecked(false)
                setInvalidChecked(true)
            }
        }
        event.preventDefault()
    }



    const changeFirstName=(event)=>{
        let value = event.target.value;
        if (value.length<=4){
            setValidFirstName(false)
            setInvalidFirstName(true)
        }else {
            setValidFirstName(true)
            setInvalidFirstName(false)
        }
        setFistName(value)
    }

    const  changeLastName = (event) =>{
        let value = event.target.value;
        if (lastName.length<=4){
            setValidLastName(false)
            setInvalidLastName(true)
        }else {
            setValidLastName(true)
            setInvalidLastName(false)
        }
        setLastName(value)
    }

    const  changeEmail = (event) =>{
        let value = event.target.value;
        if (email.length<=4){
            setValidEmail(false)
            setInvalidEmail(true)
        }else {
            setInvalidEmail(false)
            setValidEmail(true)
        }
        setEmail(value)
    }

    const  changeAddress= (event)=>{
        let value = event.target.value;
        if (address.length<=8){
            setInvalidAddress(true)
            setValidAddress(false)
        }else {
            setValidAddress(true)
            setInvalidAddress(false)
        }
        setAddress(value)
    }

    const changeName= (event)=>{
        let value = event.target.value;
        if (name.length<=4){
            setValidName(false)
            setInvalidName(true)
        }else {
            setValidName(true)
            setInvalidName(false)
        }
        setName(value)
    }

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (value===true){
            setValidChecked(true)
            setInvalidChecked(false)
        }else {
            setValidChecked(false)
            setInvalidChecked(true)
        }
        setChecked(value)
    }
    const handleInputNumber = (event) =>{
        let value =event.target.value.replace(/([^0-9a-z-\s])/g, '');
        let regex=/^[0-9]+$/;
        value.match(regex)
        if (value.match(regex)){

            if (number.length===16){
                setValidNumber(true)
                setInvalidNumber(false)
            }else {
                setValidNumber(false)
                setInvalidNumber(true)
            }
        }
        if (value.length<=16){
            setNumber(value)
        }

        event.preventDefault()
    }


    return(
        <>
            <div style={{display:show===true?'block':'none'}}>
                <Success />
            </div>
            <div style={{display:show===true?'none':'block'}}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
                            <div className="card card0">
                                <div className="row">
                                    <div className="col-md-6 d-block p-0 box">
                                        <div className="card rounded-0 border-0 card1 pr-xl-4 pr-lg-3">
                                            <div className="row justify-content-center">
                                                <div className="col-11">
                                                    <h3 className="text-center mt-4 mb-4" id="heading0">
                                                        Free Shipping for Members

                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-5 fit-image"><img
                                                    src="https://i.imgur.com/NnVWuER.png" height="200px" alt='' width="200px"/>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-11">
                                                    <p className="text-center mt-0 mb-3" id="sub-heading2">
                                                        Free Shipping & 60-Day Free Returns</p>
                                                </div>
                                            </div>
                                            <form className="form-card p-4 pl-5">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-12"><label className="gift">First Name</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <FormGroup>
                                                                <Input className="gift-input"  type="text"
                                                                value={fistsName}  onChange={changeFirstName}
                                                                 placeholder="First Name"
                                                                       valid={validFirstName} invalid={invalidFirstName}
                                                                />

                                                                 </FormGroup>
                                                                </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-12"><label className="gift">Last Name</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <FormGroup>
                                                                    <Input className="gift-input"  type="text"
                                                                           defaultValue={lastName}  onChange={changeLastName}
                                                                           placeholder="Last Name"
                                                                           valid={validLastName} invalid={invalidLastName}
                                                                    />

                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12"><label className="gift">Email
                                                        </label><br/>
                                                        <FormGroup>
                                                            <Input className="gift-input"  type="text"
                                                                   value={email}  onChange={changeEmail}
                                                                   placeholder="Email"
                                                                   valid={validEmail} invalid={invalidEmail}
                                                            />

                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12"><label className="gift">Address
                                                        </label><br/> <FormGroup>
                                                        <Input className="gift-input"  type="text"
                                                               value={address}  onChange={changeAddress}
                                                               placeholder="Address"
                                                               valid={validAddress} invalid={invalidAddress}
                                                        />
                                                    </FormGroup>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 p-0 box">
                                        <div className="card rounded-0 border-0 card2">
                                            <div className="form-card">
                                                <h2 id="heading" className="text-center">Payment Information
                                                  <i href='/#' className="now-ui-icons ui-1_simple-remove ml-5 hvr-grow-shadow "
                                                  onClick={closePay}>
                                                  </i>
                                                </h2>
                                                <div className="radio-group">
                                                    <div className="radio selected" data-value="credit"><img
                                                        src="https://i.imgur.com/28akQFX.jpg" alt='' width="200px"
                                                        height="60px"/></div>
                                                    <div className="radio" data-value="paypal"><img
                                                        src="https://i.imgur.com/5QFsx7K.jpg" alt=''  width="200px"
                                                        height="60px"/></div>
                                                    <br/>
                                                </div>
                                                <h3 id="credit" className="mb-3 ">Credit card</h3>

                                                <FormGroup>
                                                    <Input type="text" className='input-pay'
                                                           name="holdername" placeholder="Name on card"
                                                            valid={validName} invalid={invalidName}
                                                           onChange={changeName}
                                                    />
                                                </FormGroup>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <FormGroup>
                                                            <Input type="text" name="cardno" id="cr_no" className='input-pay'
                                                                   placeholder="0000 0000 0000 0000"
                                                                   value={number}
                                                                   valid={validNumber} invalid={invalidNumber}
                                                                   onChange={handleInputNumber}
                                                            />
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row form-group">
                                                    <div className="col-12">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <FormGroup>
                                                                <Input id="chk1" type="checkbox"
                                                                       className="custom-control-input"
                                                                       value={checked}
                                                                       onChange={handleInputChange}
                                                                       valid={validChecked} invalid={invalidChecked}
                                                                />
                                                             <label htmlFor="chk1" className="custom-control-label">
                                                                I agree to the terms</label>
                                                            </FormGroup>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="bottom ">
                                                    <div className="row justify-content-center">
                                                        <div className="col-12 ">
                                                            <h4 id="total" className="text-center">
                                                                {total>5000000 ?
                                                                    `Total: ${formatNumber(total)}`:
                                                                    `Total: ${formatNumber(total+30000)}`
                                                                }</h4>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-8"><input onClick={submitPay} type='submit'
                                                                                         value="Send"
                                                                                         className="btn btn-bag"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{'width':loadpay===false?'0%':'100%','zIndex':loadpay===false?'0':'9998'}} className="preloader d-flex align-items-center justify-content-center">
                <div style={{'display':loadpay===false?'none':'block'}} className="sk-chase" >
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                </div>
            </div>

        </>
    )
}