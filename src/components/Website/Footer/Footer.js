import React from "react";
import 'static/website/css/footer.css'

import { Nav} from "react-bootstrap";
export  default  function Footer() {
    return(
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="footer-widget">
                                <h6 className="widget-title">LOCFUHO STORE</h6>
                                <p className='text-white'>Thích thì mua không thích thì phải mua</p>
                                <div className="footer-social-info">
                                    <a href={'/#'} rel="noopener noreferrer" className="facebook"><i>L</i></a>
                                    <a href={'/#'}  rel="noopener noreferrer"className="google-plus"><i>Ộ</i></a>
                                    <a href={'/#'}  rel="noopener noreferrer" className="instagram"><i>C</i></a>
                                    <a href={'/#'}  rel="noopener noreferrer" className="twitter"><i>F</i></a>
                                    <a href={'/#'}  rel="noopener noreferrer" className="linkedin"><i >C</i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-5 col-lg-5">
                            <div className="footer-widget">
                                <h6 className="widget-title">BRANDS</h6>
                                <nav className="footer-widget-nav">
                                    <ul>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                           aria-hidden="true"></i> Nike</Nav.Link></li>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                           aria-hidden="true"></i> Adidas</Nav.Link></li>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                                    aria-hidden="true"></i> Biti's</Nav.Link></li>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                           aria-hidden="true"></i> Converse</Nav.Link></li>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                           aria-hidden="true"></i> Balenciaga</Nav.Link></li>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                           aria-hidden="true"></i> New Balance</Nav.Link></li>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                            aria-hidden="true"></i> Puma</Nav.Link></li>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                            aria-hidden="true"></i> Vans</Nav.Link></li>
                                        <li><Nav.Link to="/"><i className="fa fa-angle-double-right"
                                                            aria-hidden="true"></i> Gucci</Nav.Link></li>
                                        <li><Nav.Link to="/#"><i className="fa fa-angle-double-right"
                                                            aria-hidden="true"></i> Reebok</Nav.Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-lg-3">
                            <div className="footer-widget">
                                <h6 className="widget-title">most popular</h6>
                                <ul className="footer-tags">
                                    <li><a href="/#">Air Max</a></li>
                                    <li><a href="/#">Air Fox</a></li>
                                    <li><a href="/#">Hunter</a></li>
                                    <li><a href="/#">SUPERSTAR</a></li>
                                    <li><a href="/#">ULTRABOOST</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copywrite-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <p className="copywrite-text">
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                        aria-hidden="true"></i> by <a
                                        href="https://colorlib.com" rel="noopener noreferrer">LOCFUHO</a>
                                </p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <nav className="footer-nav">
                                    <ul>
                                        <li><a href="/#">Home</a></li>
                                        <li><a href="/#">Privacy</a></li>
                                        <li><a href="/#">Advertisement</a></li>
                                        <li><a href="/#">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}