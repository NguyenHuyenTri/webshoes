import React, {useEffect} from "react";
import img1 from 'static/img/bg-img/mens-shoes-clothing-accessories.jpg'
import img2 from 'static/img/bg-img/mens-shoes-clothing-accessories-md.jpg'
import 'static/website/css/animate.css'
import {Button} from "react-bootstrap";
import 'static/website/css/men.css'
import SlideProduct from "components/Website/Slide/SlideProduct";

import imgTrending1 from 'static/img/bg-img/mens-shoes-clothing-accessories-more-1.png'
import imgTrending2 from 'static/img/bg-img/mens-shoes-clothing-accessories-more-2.jpg'
import {dataScrollHome} from 'variables/slide'
import SlidePoster from "components/Website/Slide/SlidePoster";
import SlideTrending from "components/Website/Slide/SlideTrending";
import 'static/website/css/product/product.css';
import { useHistory } from "react-router-dom";

export default function Men (){
    let history = useHistory()

    useEffect(() => {
        document.title = "LOCFUHO STORE MEN"
    }, [])
    const   dataMen = [
        {id:1,
        image:img1,
        button:'Shop'
        }
    ]
    const   dataMenMd = [
        {id:1,
            image:img2,
            button:'Shop'
        }
    ]
    const slidesTrending = [
        {
            id: 1,
            button: "Shop",
            caption:'Nike Air Max ',
            image:imgTrending1,
            path:'/locfuho/men'
        }, {
            id: 2,
            button: "Shop",
            caption:'Nike Air Max ',
            image:imgTrending2,
            path:'/locfuho/woman'
        },
    ];

    const redirectPath = () =>{
      history.push("/locfuho/men/product")
    }

   return(
            <>
                    <div className='body-website'>
                        <div className='mr-30 ml-30' >
                                <SlidePoster dataMen={dataMen} link='/locfuho/men/product'  dataMenMd={dataMenMd}/>
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
                        <div className='mr-30 ml-30 mt-30 mb-0 text-center moreShow' style={{'height':'300px'}}  >
                                <h1>FIND YOUR FAST</h1>
                                <p>
                                    Introducing the LocFuHo Zoom Ekiden Pack.
                                </p>
                            <p>
                                <Button onClick={redirectPath} className='more-black hvr-float-shadow btn' >Shop</Button>
                            </p>

                        </div>
                    </div>
            </>
        );
}