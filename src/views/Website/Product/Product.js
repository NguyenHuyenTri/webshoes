import React, {useEffect, useState} from 'react';
import SlideAlert from "components/Website/Slide/SlideAlerts";
import Row from "react-bootstrap/Row";
import {productList} from 'variables/product'
import 'static/website/css/product/product.css'
import Button from "react-bootstrap/Button";
import SlideProduct from "components/Website/Slide/SlideProduct";
import {dataScrollHome} from "variables/slide";
import {useHistory, useParams} from "react-router";
import {SearchProduct} from "components/Search";
import  {formatNumber,CheckBag,CheckIdCard} from "views/to_slug";
import {bag} from "variables/bag";
import Modal from "react-bootstrap/Modal";


const Product = () => {
    let params = useParams()
    let history =useHistory()

    let [data ,setData]=useState([])
    let [image,setImage]=useState([])
    const [cart,setCard]=useState(bag)
    const [button,setButton]=useState(false)
    const [show, setShow] = useState(false);
    const [load,setLoad]=useState(false)
    const handleClose = () => setShow(false);



    useEffect(()=>{
            if (params){
                let temp = [] ;
                temp=(SearchProduct(params.value,productList,'productName'));
                temp.map((props)=>{
                   setImage((props.dataImage))
                    setData(props)
                    return null;
                })
                if (bag.length > 0 &&( CheckBag(cart,data['productName']))===true){
                    setButton(true)
                }
                if (temp.length===0){
                    history.push('/locfuho/all/product')
                }
            }
    },[params,history,data,cart])
    console.log(data)
    const  addBag = (data) =>{

        setLoad(true)
        if (data){
            let temp = cart ;
            if (temp.length===0){
                let x = {
                    brandName:data.brandName,
                    productName:data.productName,
                    image:data.image,
                    price:data.price,
                    amount:1,
                }
                temp.push(x)
                setTimeout(()=>{
                    setButton(true);
                    setLoad(false)
                },1000)
                localStorage.setItem('localBag',JSON.stringify(temp));
            }else {
                if (( CheckBag(temp,data['productName']))===true){
                    setShow(true)
                    setTimeout(()=>{ setButton(false);setLoad(false)},1000)
                }else {
                    let x = {
                        brandName:data.brandName,
                        productName:data.productName,
                        image:data.image,
                        price:data.price,
                        amount:1,
                    }
                    temp.unshift(x)
                    setCard(temp);
                    setTimeout(()=>{ setButton(true);setLoad(false)},1000)
                    localStorage.setItem('localBag',JSON.stringify(temp));
                }
            }
        }
    }
    const cancelBag = (data) =>{
        setLoad(true)
        if(data){
            let temp = cart ;
            if (( CheckBag(cart,data['productName']))===true){
                let x = ''
                x = (CheckIdCard(cart,data['productName']));
                temp.splice(x,1)
                setCard(temp);
                setTimeout(()=>{ setButton(false);setLoad(false)},1000)
                localStorage.setItem('localBag',JSON.stringify(temp));
            }
        }
    }

    return (
        <>
           <div className='body-website'>
                <SlideAlert/>
                <Row className='ml-15 mr-15  mt-30'>
                        <div className="col-12 col-md-9">
                            <Row className='ml-30 mr-30'>
                                {image.map((prop,index )=>{
                                        return(
                                            <div key={index} className='col-12  col-lg-6 p-2' >
                                                <div className="moreShow" >
                                                    <img height='500px' width='500px' className='img-fluid box-shadow single-trending-post '
                                                         src={prop} alt=''/>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </Row>
                        </div>
                        <div className="col-12 col-md-3 mt-5 mt-md-0">
                            <Row  className='mr-15'>
                                    <div className="col-8">
                                        <h6 className='headline-5-small'>{data.gender}</h6>
                                    </div>
                                    <div className='col-4'>
                                       <p className='product-price-p'> {formatNumber(data.price)}₫ </p>
                                    </div>
                                <div  className='col-12 mt-2 product-size'  >
                                    <h3>{data.productName}
                                    </h3>
                                    <h5>Select Size</h5>
                                    <Button className='btn size' size='lg' variant="light">38</Button>
                                    <Button className='btn size' size='lg' variant="light">39</Button>
                                    <Button className='btn size' size='lg' variant="light">40</Button>
                                    <Button className='btn size' size='lg' variant="light">41</Button>
                                    <Button className='btn size' size='lg' variant="light">42</Button>
                                    <Button className='btn size' size='lg' variant="light">43</Button>
                                    <Button className='btn size' size='lg' variant="light">44</Button>
                                    <Button className='btn size' size='lg' variant="light">45</Button>
                                    <div>
                                            <Button className='add-black' onClick={button===false ?addBag.bind(this,data):
                                                cancelBag.bind(this,data)} disabled={load===true?true:false}>
                                                {button===false ? 'Add To Bag' :'Cancel To Bag'}
                                                {' '}
                                            </Button>
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
                   <SlideProduct slidesData={dataScrollHome}/>
               </div>
           </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Woohoo, This product was added to cart before!!</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Check Bag
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default Product;