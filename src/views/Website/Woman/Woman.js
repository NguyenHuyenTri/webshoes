import React from "react";
import {Button} from "react-bootstrap";
import SlidePoster from "components/Website/Slide/SlidePoster";
import img1 from "static/img/bg-img/mens-shoes-clothing-accessories.jpg";
import img2 from "static/img/bg-img/mens-shoes-clothing-accessories-md.jpg";
import img1data from "static/img/imgProduct/13-Bitis-Hunter-X-Festive -Washed-Green.jpg";
import img2data from "static/img/imgProduct/02-air-zoom-tempo-next-running-shoe.jpg";
import img3data from "static/img/imgProduct/03-air-force-1-07-craft-shoe.jpg";
import img4data from "static/img/imgProduct/08-sb-zoom-stefan-janoski-rm-skate-shoe.jpg";
import img5data from "static/img/imgProduct/05-zoom-fly-3-running-shoe.jpg";
import SlideProduct from "components/Website/Slide/SlideProduct";
import SlideTrending from "components/Website/Slide/SlideTrending";
import imgTrending1 from "static/img/bg-img/womens-shoes-clothing-accessories.jpg";
import imgTrending2 from "static/img/bg-img/mens-shoes-clothing-accessories-more-2.jpg";

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
    const slidesData = [
        {
            id: 1,
            title: 'repellendus id ullam',
            label: 'Dolorem officiis temporibus.',
            image:img1data,
        }, {
            id: 2,
            title: 'excepturi consequatur est',
            label: 'Officia non provident dolor esse et neque.',
            image:img2data,
        }, {
            id: 3,
            title: 'eius doloribus blanditiis',
            label: 'Ut recusandae vel vitae molestiae id soluta.',
            image:img3data,
        }, {
            id: 4,
            title: 'nihil voluptates delectus',
            label: 'Qui vel consequatur recusandae illo repellendus.',
            image:img4data,
        }, {
            id: 5,
            title: 'nemo dolorem necessitatibus',
            label: 'Placeat odit velit itaque voluptatem.',
            image:img5data,
        },
        {
            id: 5,
            title: 'nemo dolorem necessitatibus',
            label: 'Placeat odit velit itaque voluptatem.',
            image:img5data,
        },
    ];
    return(
        <>
            <div className='body-website'>
                <div className='mr-30 ml-30' >
                    <SlidePoster dataMen={dataWoman} dataMenMd={dataWomanMd}/>
                </div>
                <div className='mr-30 ml-30 mt-30' >
                    <div>
                        <div className="section-heading" style={{'height':'50px'}}>
                            <h5 className='text-dark'>Featured Footwear</h5>
                        </div>
                    </div>
                    <SlideProduct slidesData={slidesData}/>
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