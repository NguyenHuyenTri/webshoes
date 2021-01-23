// import React, {  useEffect, useRef } from 'react';
// import Swiper from 'react-id-swiper';
// import img1 from "../static/img/slide/slide_01.jpg";
// import img3 from "../static/img/slide/slide_03.jpg";
// import img4 from "../static/img/slide/slide_04.jpg";
// import img5 from "../static/img/slide/slide_05.jpg";
//
// const slidesData = [
//     {
//         id: 1,
//         title: 'repellendus id ullam',
//         label: 'Dolorem officiis temporibus.',
//         image:img1,
//     }, {
//         id: 3,
//         title: 'eius doloribus blanditiis',
//         label: 'Ut recusandae vel vitae molestiae id soluta.',
//         image:img3,
//     }, {
//         id: 4,
//         title: 'nihil voluptates delectus',
//         label: 'Qui vel consequatur recusandae illo repellendus.',
//         image:img4,
//     }, {
//         id: 5,
//         title: 'nemo dolorem necessitatibus',
//         label: 'Placeat odit velit itaque voluptatem.',
//         image:img5,
//     },
// ];
//
// const Gallery = () => {
//     const gallerySwiperRef = useRef(null);
//     const thumbnailSwiperRef = useRef(null);
//     const gallerySwiperParams = {
//         spaceBetween: 10,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         }
//     };
//     const thumbnailSwiperParams = {
//         spaceBetween: 10,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         touchRatio: 0.2,
//         slideToClickedSlide: true
//     };
//     useEffect(() => {
//         const gallerySwiper = gallerySwiperRef.current.swiper;
//         const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
//         if (gallerySwiper.controller && thumbnailSwiper.controller
//         ) {
//             gallerySwiper.controller.control = thumbnailSwiper;
//             thumbnailSwiper.controller.control = gallerySwiper;
//         }
//     }, []);
//     return (
//         <div>
//             <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
//                 {slidesData.map((prop ,item)=>{
//                     return(
//                         <div className='slide-index' key={prop.id} style={{'backgroundImage':`url(${prop.image})`}}
//                         >
//                         </div>
//                     )
//                 })}
//             </Swiper>
//             <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>
//                 <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/1)' }} />
//                 <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/2)' }} />
//                 <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/3)' }} />
//                 <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/4)' }} />
//                 <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/5)' }} />
//             </Swiper>
//         </div>
//     );
// };
// export default Gallery;