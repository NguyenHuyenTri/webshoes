import React, {useRef, useState} from "react";

import Swiper from 'react-id-swiper';

import 'static/website/css/slide/slideIndex.css'
import 'swiper/css/swiper.css';
import {dataSlideHome} from 'variables/slide';


const HeroSliderConfigs = {
    slidesPerView: 1,
    containerClass: 'swiper-container slide-index ',
    parallax: true,
    centeredSlides: true,
    grabCursor: true,
    speed: 500,
    spaceBetween: 0,
    loop: true,
};

const HeroSlider = () => {
    const swiperRef = useRef(null);
    const [animated,setAminated]=useState(false)
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            setAminated(true)
        }
        setTimeout(()=>setAminated(false),1000)
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
            setAminated(true)
        }
        setTimeout(()=>setAminated(false),1000)
    };


    return (
        <> <div className='slide-product-home'>
            <Swiper  ref={swiperRef} {...HeroSliderConfigs}  >
            {dataSlideHome.map((prop ,item)=>{
                return(
                        <div className='slide-index' key={item} style={{'backgroundImage':`url(${prop.image})`}}
                             >
                            <div className='container h-100'>
                                <div className="row h-100 align-items-center">
                                    <div className="col-12">
                                        <div className="post-content text-center">
                                            <div className={animated===true?'post-meta animated fadeInUp ':'post-meta'}
                                                 data-delay="100ms">
                                                <a href="/#">{prop.brandName}</a>
                                                <a href="archive.html">{prop.productName}</a>
                                            </div>
                                            <a href="video-post.html"
                                               className={animated===true?' animated fadeInUp post-title':' post-title'}
                                               data-delay="300ms">{prop.title}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })}
            </Swiper>
            <div className="owl-prev" onClick={goPrev} >
                <i className="now-ui-icons arrows-1_minimal-left"></i>
            </div>
            <div className="owl-next" onClick={goNext}>
                <i className="now-ui-icons arrows-1_minimal-right"></i></div>
        </div>
        </>

    );
};

export default HeroSlider;