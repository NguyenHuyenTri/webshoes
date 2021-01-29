import React, {useEffect, useState} from "react";
import 'static/website/css/bag/bag.scss'
import SlideAlert from "components/Website/Slide/SlideAlerts";
import {Button, NavLink} from "react-bootstrap";
import {bag} from "variables/bag";
import {formatNumber} from "views/to_slug";
import {useHistory} from "react-router";


export default function Bag() {
    let history = useHistory();
    const [cart ,setCard]=useState(bag);
    const [load,setLoad]=useState(false)
    const [loadpay,setLoadPay]=useState(false);
    const [total,setTotal]=useState(0)


    useEffect(()=>{
        let x = 0;
        if (cart){
            cart.filter((props)=>{
                x = x + (parseInt(props.price)*props.amount);
                return null
            })
            setTotal(x);
        }
    },[cart])

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
            setLoadPay(false)
            history.push('/locfuho/pay')
        },2000)
        event.preventDefault()
    }
    const handleAmount = (index,event) =>{
        let value =event.target.value.replace(/([^0-9a-z-\s])/g, '');
        let regex=/^[0-9]+$/;
        value.match(regex)
        let x = 0;
        if (value>0){
            let markers = [ ...cart ];
            markers[index] = {...markers[index], amount: value};
            markers.filter((props)=>{
                x = x + (parseInt(props.price)*props.amount);
                return null
            })
            setTotal(x);
            setCard(markers)
            localStorage.setItem('localBag',JSON.stringify(markers))
        }
        event.preventDefault()
    }

    let x = 0;
    return(
        <>
            <SlideAlert/>
            <div className="wrap cf">
                <h1 className="projTitle">Shopping Cart</h1>
                <div className="heading cf">
                    <h1>My Cart</h1>
                    <a href="/#" onClick={(e)=>{e.preventDefault();history.push('/locfuho/all/product') }} className="continue">Continue Shopping</a>
                </div>
                <div className="cart">
                    <ul className="cartWrap">

                        {cart.length>0 ?
                        cart.map((item,index)=>{
                            x = x + (parseInt(item.price)*item.amount);
                            return(
                                <li className="items odd" key={index}>
                                    <div className="infoWrap">
                                        <div className="cartSection">
                                            <img src={item.image} alt=""
                                                 className="itemImg" />
                                            <p className="itemNumber">#{item.brandName}</p>
                                            <h3>{item.productName}</h3>
                                            <p> <input type="text" className="qty" value={item.amount}
                                                       onChange={handleAmount.bind(this,index)}/>
                                                        ${formatNumber(item.price)}</p>
                                            <p className="stockStatus"> In Stock</p>
                                        </div>
                                        <div className="prodTotal cartSection">
                                            <p>${formatNumber(parseInt( item.price )* item.amount)}</p>
                                        </div>
                                        <div style={{'float':'right'}} className="cartSection removeWrap">
                                            <Button  size='sm' variant='secondary'
                                                     disabled={load === true ? true : false}
                                                    onClick={removeBag.bind(this ,index)}>x</Button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                        :   <>
                               <p> There are no items in your bag</p>
                            </>
                        }
                    </ul>
                </div>
                <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label>
                    <input type="text" name="promo" placholder="Enter Code" />
                    <NavLink href="/#" className="btn-bag" ></NavLink></div>
                <div className="subtotal cf">
                    <ul>
                        <li className="totalRow"><span className="label">Subtotal</span><span className="value">
                            {cart.length>0 ? `${formatNumber(total)}₫`:'0₫'}
                            </span></li>
                        <li className="totalRow"><span className="label">Shipping</span><span className="value">
                            {cart.length>0 && total >5000000 ? '0₫':`${formatNumber(30000)}₫`}</span></li>
                        <li className="totalRow final"><span className="label">Total</span><span className="value">
                            {cart.length>0 && total >5000000 ? `${formatNumber(total)}₫`:`${formatNumber(total+30000)}₫`}</span></li>
                        <li className="totalRow"><a href="/#" className="btn-bag continue"
                                                     onClick={checkOut}>Checkout</a></li>
                    </ul>
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