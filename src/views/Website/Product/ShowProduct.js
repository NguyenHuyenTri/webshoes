import React, {useEffect, useState} from "react";
import SlideAlert from "components/Website/Slide/SlideAlerts";
import { Dropdown } from "react-bootstrap";
import {Navbar,Form ,Row} from "react-bootstrap";
import {DropdownButton,Button} from "react-bootstrap";

import 'static/website/css/product/product.css'
import {productList} from 'variables/product'
import 'static/website/css/animate.css'
import SideBarProduct from "./SideBarProduct";
import DataProduct from "./DataProduct";
import Spinner from "react-bootstrap/Spinner";
import {useParams} from "react-router";
import {to_slug} from "views/to_slug";
import { useHistory } from "react-router-dom";

const postsPerPage = 6;
let arrayProduct= [];
let dataProduct =[];


function ShowProduct (){

    let  params  = useParams();
    let history = useHistory()


    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(6);
    const [button,setButton]=useState(false)
    const [sale,setSale]=useState(false)
    const [isTop, setIsTop] = useState(false);


    useEffect(()=>{

        if (params){

            if (params.value==='sale'&&dataProduct.length===0){
                setSale(true)
                productList.map((props)=>{
                    if (props.price > props.originalPrice){
                        dataProduct.push(props)
                    }
                })
            }

             if (dataProduct.length===0){
                productList.map((props)=>{
                    if (to_slug(props.gender).indexOf(to_slug(params.value))>-1){
                        dataProduct.push(props)
                    }
                })
            }

             if(dataProduct.length === 0){
                dataProduct=productList;
            }
        }


    })


    const loopWithSlice = (start, end) => {
        const slicedPosts = dataProduct.slice(start, end);
        arrayProduct = [...arrayProduct, ...slicedPosts];
        setPostsToShow(arrayProduct);
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        if (scrollTop > 250){
                setIsTop(true)
        }else {
            setIsTop(false)
        }

    }

    useEffect(() => {
        loopWithSlice(0, postsPerPage);
    }, []);

    const handleShowMorePosts = () => {
        setButton(true)
        if (postsToShow.length <= dataProduct.length){
            setTimeout(()=>{ loopWithSlice(next, next + postsPerPage);
                setNext(next + postsPerPage);
                setButton(false)
            },1300);
        }
    };

    const [value,setValue]=useState('');
    const [status,setStatus]=useState(true)



    const handleSelect=(e)=>{
        setValue(e)
    }

    const styleCss ={
        position:'fixed',
        width:'100%',
        height:'auto',
        background:'#fff',
        zIndex:'999',
        top:0,
    }
    console.log(dataProduct.length);
    console.log(postsToShow.length);

    return (

        <>
            <div className='body-website'>
                <SlideAlert/>
                <div  style={isTop===true ? styleCss :null} className="product-show">
                        <Navbar style={{height: isTop===true?'60px':''}}  variant='white' className="header-product justify-content-between mb-0">
                            <Form inline>

                                <Navbar.Brand className=' ml-3'>
                                    <h5 className='mt-4 text-dark'>Men's Shoes</h5>
                                </Navbar.Brand>
                            </Form>
                            <Form inline className='mr-5' variant='white'>
                                <Button className="Button" onClick={() =>setStatus(!status)}>
                                    {status===false ?
                                        <>
                                            Show Filer {' '}
                                            <i className="now-ui-icons design_bullet-list-67"></i>
                                        </>:
                                        <> Hiden Filter {' '}
                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                        </>
                                    }
                                </Button>
                                <DropdownButton
                                    alignRight
                                    title="Sort By"
                                    id="dropdown-menu-align-right"
                                    onSelect={handleSelect}
                                >
                                    <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                    <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                                </DropdownButton>
                                {value}
                            </Form>
                        </Navbar>
                </div>
                <div className='container-fluid'>
                    <Row className='product-all'>
                        <div  style={{width : status ===true ?'17%':'0'}}  className='product-left'>
                        <SideBarProduct style={{display : status ===true ?'block':'none'}}    status={status} />
                        </div>
                        <div style={{width : status ===true ?'83%':'100%'}} className='product-right mb-3 '>
                            <Row className='ml-15 mr-15 scroll'>
                                <DataProduct sale={sale} productList={postsToShow}/>
                            </Row>

                                <div style={{display:postsToShow.length>=dataProduct.length? 'none':'block'}}   className='moreShow text-center ' >
                                    <button  style={{'width':'150px'}} onClick={handleShowMorePosts}
                                             className="more-black hvr-float-shadow"
                                            disabled={button===true?true:false}>
                                        MORE {' '}
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                style={{display:button===false? 'none':''}}
                                                disabled={true}
                                            />
                                    </button>
                                </div>
                        </div>
                    </Row>
                </div>
            </div>




        </>
    );
}

export default ShowProduct;