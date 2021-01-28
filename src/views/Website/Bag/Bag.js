import React, { useState} from "react";
import 'static/website/css/bag/bag.scss'
import SlideAlert from "components/Website/Slide/SlideAlerts";
import {Button, NavLink} from "react-bootstrap";
import {bag} from "variables/bag";
import {formatNumber, to_slug} from "views/to_slug";
import Pay from "./Pay";


export default function Bag() {

    const [cart ,setCard]=useState(bag);
    const [load,setLoad]=useState(false)
    const [show,setShow]=useState(false)
    const [loadpay,setLoadPay]=useState(false)

    const removeBag = (index) =>{
        setLoad(true)

        let temp = cart ;
        temp.splice(index,1)
        setCard(temp);
        setTimeout(()=>{ setLoad(false)},1000)
        localStorage.setItem('localBag',JSON.stringify(temp));

    }
    const checkOut = (event) =>{
        setLoadPay(true)
        setTimeout(()=>{
            setShow(true)
            setLoadPay(false)
        },2000)
        event.preventDefault()
    }


    let x = 0;
    return(
        <>
            <SlideAlert/>
            {show===false ?
            <div className="wrap cf">
                <h1 className="projTitle">Shopping Cart</h1>
                <div className="heading cf">
                    <h1>My Cart</h1>
                    <a href="/#" className="continue">Continue Shopping</a>
                </div>
                <div className="cart">
                    <ul className="cartWrap">
                        {cart.map((item,index)=>{
                            x = x + parseInt(item.price);
                            return(
                                <li className="items odd" key={index}>
                                    <div className="infoWrap">
                                        <div className="cartSection">
                                            <img src={item.image} alt=""
                                                 className="itemImg" />
                                            <p className="itemNumber">#{item.brandName}</p>
                                            <h3>{item.productName}</h3>
                                            <p> <input type="text" className="qty" placeholder={1} /> x ${formatNumber(item.price)}</p>
                                            <p className="stockStatus"> In Stock</p>
                                        </div>
                                        <div className="prodTotal cartSection">
                                            <p>${formatNumber(item.price)}</p>
                                        </div>
                                        <div style={{'float':'right'}} className="cartSection removeWrap">
                                            <Button  size='sm' variant='secondary'
                                                    disabled={load===true?true:false}
                                                    onClick={removeBag.bind(this ,index)}>x</Button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
                <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label>
                    <input type="text" name="promo" placholder="Enter Code" />
                    <NavLink href="/#" className="btn-bag" ></NavLink></div>
                <div className="subtotal cf">
                    <ul>
                        <li className="totalRow"><span className="label">Subtotal</span><span className="value">
                            ${formatNumber(x)}</span></li>
                        <li className="totalRow"><span className="label">Shipping</span><span className="value">${formatNumber(15000)}</span></li>
                        <li className="totalRow final"><span className="label">Total</span><span className="value">${formatNumber(x+15000)}</span></li>
                        <li className="totalRow"><a href="/#" className="btn-bag continue" onClick={checkOut}>Checkout</a></li>
                    </ul>
                </div>
            </div>: <Pay/>
            }
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