import React, {  useEffect, useRef } from 'react';
import SlideAlert from "components/Website/Slide/SlideAlerts";
import Row from "react-bootstrap/Row";
import {productList} from 'variables/product'
import 'static/website/css/product/product.css'
import Button from "react-bootstrap/Button";
import SlideProduct from "../../../components/Website/Slide/SlideProduct";
import img1data from "../../../static/img/imgProduct/13-Bitis-Hunter-X-Festive -Washed-Green.jpg";
import img2data from "../../../static/img/imgProduct/02-air-zoom-tempo-next-running-shoe.jpg";
import img3data from "../../../static/img/imgProduct/03-air-force-1-07-craft-shoe.jpg";
import img4data from "../../../static/img/imgProduct/08-sb-zoom-stefan-janoski-rm-skate-shoe.jpg";
import img5data from "../../../static/img/imgProduct/05-zoom-fly-3-running-shoe.jpg";
const Product = () => {
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
    return (
        <>
           <div className='body-website'>
                <SlideAlert/>
                <Row className='ml-15 mr-15  mt-30'>
                        <div className="col-9">
                            <Row className='ml-30 mr-30'>
                                {productList.map((prop ,index)=>{
                                    return(
                                        <div key={index} className='col-12 col-md-6 col-lg-6 p-2' >
                                            <div className="moreShow" >
                                                <img height='500px' width='500px' className='img-fluid box-shadow single-trending-post ' src={prop.image} alt=''/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Row>
                        </div>
                        <div className="col-3  ">
                            <Row className='mr-15'>
                                    <div className="col-8">
                                        <h6 className='headline-5-small'>MEN'S SHOES</h6>
                                    </div>
                                    <div className='col-4'>
                                       <p className='product-price-p'> 2,000,000</p>
                                    </div>
                                <div  className='col-12 mt-2 product-size'  >
                                    <h3>Nike React Infinity Run Flyknit 2
                                    </h3>
                                    <h5>Select Size</h5>
                                    <Button className='btn size' size='lg' variant="light">38</Button>
                                    <Button className='btn size' size='lg' variant="light">38</Button>
                                    <Button className='btn size' size='lg' variant="light">38</Button>
                                    <Button className='btn size' size='lg' variant="light">38</Button>
                                    <Button className='btn size' size='lg' variant="light">38</Button>
                                    <Button className='btn size' size='lg' variant="light">38</Button>
                                    <Button className='btn size' size='lg' variant="light">38</Button>
                                    <div>
                                        <Button className='add-black'>Add To Bag</Button>
                                    </div>
                                    <div>
                                        <Button className='add-white'>Favourite <i className="far fa-heart"></i></Button>
                                    </div>

                                </div>


                            </Row>
                        </div>
                </Row>
               <div className='mr-30 ml-30 mt-30 mb-30' >
                   <div >
                       <div className="section-heading" style={{'height':'50px'}}>
                           <h5 className='text-dark'>YOU MIGHT ALSO LIKE</h5>
                       </div>
                   </div>
                   <SlideProduct slidesData={slidesData}/>
               </div>
           </div>
        </>
    );
};
export default Product;