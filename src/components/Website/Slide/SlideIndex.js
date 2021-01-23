import React, {useRef, useState} from "react";

import Swiper from 'react-id-swiper';
import img1 from 'static/img/slide/slide_01.jpg'
import img3 from 'static/img/slide/slide_03.jpg'
import img4 from  'static/img/slide/slide_04.jpg'
import img5 from  'static/img/slide/slide_05.jpg'

import 'static/website/css/slide/slideIndex.css'
import 'swiper/css/swiper.css';

const slidesData = [
    {
        id: 1,
        title: 'repellendus id ullam',
        label: 'Dolorem officiis temporibus.',
        image:img1,
    }, {
        id: 3,
        title: 'eius doloribus blanditiis',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
        image:img3,
    }, {
        id: 4,
        title: 'nihil voluptates delectus',
        label: 'Qui vel consequatur recusandae illo repellendus.',
        image:img4,
    }, {
        id: 5,
        title: 'nemo dolorem necessitatibus',
        label: 'Placeat odit velit itaque voluptatem.',
        image:img5,
    },
];
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
            {slidesData.map((prop ,item)=>{
                return(
                        <div className='slide-index' key={prop.id} style={{'backgroundImage':`url(${prop.image})`}}
                             >
                            <div className='container h-100'>
                                <div className="row h-100 align-items-center">
                                    <div className="col-12">
                                        <div className="post-content text-center">
                                            <div className={animated===true?'post-meta animated fadeInUp ':'post-meta'}
                                                 data-delay="100ms">
                                                <a href="/#">MAY 8, 2018</a>
                                                <a href="archive.html">lifestyle</a>
                                            </div>
                                            <a href="video-post.html"
                                               className={animated===true?' animated fadeInUp post-title':' post-title'}
                                               data-delay="300ms">Party Jokes Startling But Unnecessary</a>
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