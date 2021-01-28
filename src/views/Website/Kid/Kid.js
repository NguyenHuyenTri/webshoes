import React from "react";
import  'static/website/css/slide/slideIndex.css'
import SlildeImage from "components/Website/Slide/SlildeImage";
import SlideProduct from "components/Website/Slide/SlideProduct";
import SlideTrending from "components/Website/Slide/SlideTrending";
import {Button} from "react-bootstrap";
import img1 from 'static/img/slide/slide_05.jpg'
import {dataScrollHome} from 'variables/slide'
import imgTrending1 from "static/img/bg-img/nike-kids.jpg";
import imgTrending2 from "static/img/bg-img/nike-kids-2.jpg";

export default function Kid() {
    const   dataMen = [
        {id:1,
            image:img1,
            button:'Shop',
            path:'/locfuho/kid/product'
        }
    ]
    const slidesTrending = [
        {
            id: 1,
            button: "Shop",
            caption:'How to Motivate Your Kids to Move',
            image:imgTrending1,
            path:'/locfuho/men'
        }, {
            id: 2,
            caption:'Help Your Kids Fall in Love with Movement',
            button: "Shop",
            image:imgTrending2,
            path:'/locfuho/woman'
        },
    ];
        return(
            <>
                <div className='body-website'>
                        <div className="slide-kid">
                            <SlildeImage data={dataMen} />
                        </div>
                    <div className='mr-30 ml-30 mt-30' >
                        <div>
                            <div className="section-heading" style={{'height':'50px'}}>
                                <h5 className='text-dark'>Featured Footwear</h5>
                            </div>
                        </div>
                        <SlideProduct slidesData={dataScrollHome}/>
                    </div>
                    <div className='mr-30 ml-30 mt-30' >
                        <div>
                            <div className="section-heading" style={{'height':'50px'}}>
                                <h5 className='text-dark'>Stay Active at Home</h5>
                            </div>
                            <SlideTrending slidesTrending={slidesTrending}/>
                        </div>

                    </div>
                    <div className='mr-30 ml-30 mt-30 mb-0 text-center moreShow' style={{'height':'250px'}}  >
                        <h1 >FIND YOUR FAST</h1>
                        <p>
                            Introducing the LocFuHo Zoom Ekiden Pack.
                        </p>
                        <p>
                            <Button className='more-black hvr-float-shadow btn' >Shop</Button>
                        </p>

                    </div>
                </div>
            </>
        )
}

