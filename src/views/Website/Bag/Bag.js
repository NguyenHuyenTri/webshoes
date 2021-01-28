import React from "react";
import 'static/website/css/bag/bag.scss'
import img1 from 'static/img/imgProduct/adidas-downshifter.jpg'
import SlideAlert from "../../../components/Website/Slide/SlideAlerts";
import {NavLink} from "react-bootstrap";
export default function Bag() {
    return(
        <>
            <SlideAlert/>
            <div className="wrap cf">
                <h1 className="projTitle">Shopping Cart</h1>
                <div className="heading cf">
                    <h1>My Cart</h1>
                    <a href="/#" className="continue">Continue Shopping</a>
                </div>
                <div className="cart">
                    <ul className="cartWrap">
                        <li className="items odd">
                            <div className="infoWrap">
                                <div className="cartSection">
                                    <img src={img1} alt=""
                                    className="itemImg" />
                                    <p className="itemNumber">#QUE-007544-002</p>
                                    <h3>Item Name 1</h3>
                                    <p> <input type="text" className="qty" placeholder={3} /> x $5.00</p>
                                    <p className="stockStatus"> In Stock</p>
                                </div>
                                <div className="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div className="cartSection removeWrap">
                                    <a href="/#" className="remove">x</a>
                                </div>
                            </div>
                        </li>
                        <li className="items even">
                            <div className="infoWrap">
                                <div className="cartSection">
                                    <img src={img1} alt=""
                                         className="itemImg" />
                                    <p className="itemNumber">#QUE-007544-002</p>
                                    <h3>Item Name 1</h3>
                                    <p> <input type="text" className="qty" placeholder={3} /> x $5.00</p>
                                    <p className="stockStatus"> In Stock</p>
                                </div>
                                <div className="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div className="cartSection removeWrap">
                                    <a href="/#" className="remove">x</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label>
                    <input type="text" name="promo" placholder="Enter Code" />
                    <NavLink href="/#" className="btn-bag" ></NavLink></div>
                <div className="subtotal cf">
                    <ul>
                        <li className="totalRow"><span className="label">Subtotal</span><span className="value">$35.00</span></li>
                        <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>
                        <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li>
                        <li className="totalRow final"><span className="label">Total</span><span className="value">$44.00</span></li>
                        <li className="totalRow"><a href="/#" className="btn-bag continue">Checkout</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}