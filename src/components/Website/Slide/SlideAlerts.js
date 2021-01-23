import React from "react";
import Swiper from "react-id-swiper"
import 'static/website/css/slide/slideIndex.css'
import {Nav, NavLink} from "react-bootstrap";

export default function  SlideAlert() {
       const params = {
           containerClass: 'swiper-container slider',
           parallax: true,
           centeredSlides: true,
           grabCursor: true,
           speed: 500,
           spaceBetween: 0,
           effect: 'slide',
           autoplay: {
               delay: 5000,
               disableOnInteraction: false
           },
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           },
           simulateTouch:false,
       }
       return(
           <>
               <div className='slide-alert'>
                   <div className="container h-100 w-100">
                       <Swiper {...params} >
                           <Nav className='slider'>
                               <NavLink className="mx-auto my-auto">
                                   <p className='text-center mb-0  text-dark'>Due to unavoidable circumstances,
                                       some orders may be delayed.<br/> We apologize for any inconvenience.</p>
                               </NavLink>
                           </Nav>
                           <Nav className='slider'>
                               <NavLink className="mx-auto my-auto">
                                   <p className='text-center mb-0 text-dark'>FREE DELIVERY TO YOU
                                       <strong> Get Free Standard Delivery On All Orders.</strong> </p>
                               </NavLink>
                           </Nav>
                       </Swiper>
                   </div>
               </div>
           </>
       )
   }
