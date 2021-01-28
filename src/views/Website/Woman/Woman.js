import React from "react";
import {Button} from "react-bootstrap";
import SlidePoster from "components/Website/Slide/SlidePoster";
import img1 from "static/img/bg-img/mens-shoes-clothing-accessories.jpg";
import img2 from "static/img/bg-img/mens-shoes-clothing-accessories-md.jpg";
import SlideProduct from "components/Website/Slide/SlideProduct";
import SlideTrending from "components/Website/Slide/SlideTrending";
import imgTrending1 from "static/img/bg-img/womens-shoes-clothing-accessories.jpg";
import imgTrending2 from "static/img/bg-img/mens-shoes-clothing-accessories-more-2.jpg";
import {dataScrollHome} from 'variables/slide'
export default function Woman (){
    const  dataWoman = [
        {id:1,
            image:img1,
            button:'Shop'
        }
    ]
    const   dataWomanMd = [
        {id:1,
            image:img2,
            button:'Shop'
        }
    ]
    const slidesTrending = [
        {
            id: 1,
            button: "Shop",
            image:imgTrending1,
            path:'/locfuho/men'
        }, {
            id: 2,
            button: "Shop",
            image:imgTrending2,
            path:'/locfuho/woman'
        },
    ];

    return(
        <>
            <div className='body-website'>
                <div className='mr-30 ml-30' >
                    <SlidePoster dataMen={dataWoman} link={'/locfuho/woman/product'} dataMenMd={dataWomanMd}/>
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
                            <h5 className='text-dark'>Trending</h5>
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