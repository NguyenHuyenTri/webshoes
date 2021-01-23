import React from "react";
import Swiper from "react-id-swiper";


import { Col, NavLink, Row} from "react-bootstrap";
import 'static/website/css/slide/slideMore.css'
import 'swiper/css/swiper.css';

const   SlideProduct = ({slidesData}) =>{
    const config ={
        slidesPerView: 3,
        spaceBetween: 0,
        containerClass: 'swiper-container slide-product swiper-container-free-mode',
        parallax: true,
        grabCursor: true,
        speed: 500,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hide:false,
            hideOnClick:true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
            clickable:true,
            draggable:true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        },
        freeMode:true,
        longSwipesRatio:0.75,
    }
    return(
            <div>
                <Swiper {...config } >
                    {slidesData.map((slide ,index) =>{
                        return(
                        <NavLink key={index} href='/#' className='slide-product text-dark'>
                        <Row >
                        <Col>
                        <div className="moreShow" >
                        <img  className='img-fluid box-shadow single-trending-post ' src={slide.image} alt=''/>
                        <Row className='mt-3'>
                        <Col>
                        <h5  style={{'fontSize':'18px'}} className='text-left ml-4 mb-1'>Nike</h5>
                        <p style={{'fontSize':'16px'}} className='text-left ml-4'>Men's Shoes</p>
                        </Col>
                        <Col>
                        <p style={{'fontSize':'18px'}} className='text-right mr-4'>2,000,000</p>
                        </Col>
                        </Row>
                        </div>
                        </Col>
                        </Row>
                        </NavLink>
                        )
                    })}
                </Swiper>
            </div>
    )
}
export default SlideProduct;