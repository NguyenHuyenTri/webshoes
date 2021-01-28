import React from "react";
import 'static/website/css/bag/pay.css'

export default function Pay() {
    return(
        <>
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
                            <div className="card card0">
                                <div className="row">
                                    <div className="col-md-6 d-block p-0 box">
                                        <div className="card rounded-0 border-0 card1 pr-xl-4 pr-lg-3">
                                            <div className="row justify-content-center">
                                                <div className="col-11">
                                                    <h3 className="text-center mt-4 mb-4" id="heading0">Gift card
                                                        details</h3>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-5 fit-image"><img
                                                    src="https://i.imgur.com/NnVWuER.png" height="200px" width="200px"/>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-11">
                                                    <h1 className="text-center mt-4 mb-0" id="sub-heading1">6
                                                        months</h1>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-11">
                                                    <p className="text-center mt-0 mb-3" id="sub-heading2">of unlimited
                                                        access and infinite joy</p>
                                                </div>
                                            </div>
                                            <form className="form-card p-4 pl-5">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-12"><label className="gift">To</label>
                                                            </div>
                                                            <div className="col-12"><input className="gift-input"
                                                                                           type="text" name="to"
                                                                                           placeholder="Mark"/></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-12"><label className="gift">From</label>
                                                            </div>
                                                            <div className="col-12"><input className="gift-input"
                                                                                           type="text" name="from"
                                                                                           placeholder="Julia"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12"><label className="gift">Recipient
                                                        email</label><br/> <input className="gift-input" type="email"
                                                                                  name="email"
                                                                                  placeholder="mark@mail.org"/></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12"><label className="gift">Message
                                                        email</label><br/> <input className="gift-input" type="text"
                                                                                  name="msg"
                                                                                  placeholder="Happy Birthday dear friend !"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 p-0 box">
                                        <div className="card rounded-0 border-0 card2">
                                            <div className="form-card">
                                                <h2 id="heading" className="text-center">Payment Information</h2>
                                                <div className="radio-group">
                                                    <div className="radio selected" data-value="credit"><img
                                                        src="https://i.imgur.com/28akQFX.jpg" width="200px"
                                                        height="60px"/></div>
                                                    <div className="radio" data-value="paypal"><img
                                                        src="https://i.imgur.com/5QFsx7K.jpg" width="200px"
                                                        height="60px"/></div>
                                                    <br/>
                                                </div>
                                                <h3 id="credit" className="mb-3">Credit card</h3> <input type="text"
                                                                                                         name="holdername"
                                                                                                         placeholder="John Smith"/>
                                                <div className="row">
                                                    <div className="col-12"><input type="text" name="cardno" id="cr_no"
                                                                                   placeholder="0000 0000 0000 0000"
                                                                                   minLength="{19}" maxLength="{19}"/>
                                                    </div>
                                                </div>
                                                <div className="row form-group">
                                                    <div className="col-9 col-md-7"><input type="text" name="exp"
                                                                                           id="exp" placeholder="MM/YY"
                                                                                           minLength="{5}"
                                                                                           maxLength="{5}"/></div>
                                                    <div className="col-3 col-md-5"><input type="password" name="cvcpwd"
                                                                                           placeholder="●●●"
                                                                                           className="placeicon"
                                                                                           minLength="{3}"
                                                                                           maxLength="{3}"/></div>
                                                </div>
                                                <div className="row form-group">
                                                    <div className="col-12">
                                                        <div
                                                            className="custom-control custom-checkbox custom-control-inline">
                                                            <input id="chk1" type="checkbox" name="chk"
                                                                   className="custom-control-input"/> <label
                                                            htmlFor="chk1" className="custom-control-label">Business
                                                            account</label></div>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="row justify-content-center">
                                                        <div className="col-12">
                                                            <h4 id="total" className="text-center">Total: $69.94 + <span
                                                                className="text-dark">VAT</span></h4>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-8"><input type="submit"
                                                                                         defaultValue="PURCHASE CARD"
                                                                                         className="btn btn-success"/>
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


        </>
    )
}