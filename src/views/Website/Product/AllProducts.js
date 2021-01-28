import React, {useCallback, useEffect, useState} from "react";
import SlideAlert from "components/Website/Slide/SlideAlerts";
import {Button, Dropdown, DropdownButton, Form, Navbar, Row,Card,Accordion}
        from "react-bootstrap";
import {brandNameList} from "variables/data";
import DataProduct from "./DataProduct";
import {useParams,useHistory} from "react-router";
import {SearchProduct} from 'components/Search'
import {productList} from "variables/product";
import {sortPrice} from 'views/to_slug'
const styleCss ={
    position:'fixed',
    width:'100%',
    height:'auto',
    background:'#fff',
    zIndex:'999',
    top:0,
    transition: 'all 1s ease',
}

export default function () {


    // navbar
    const [isTop, setIsTop] = useState(false);
    const [status,setStatus]=useState(true)
    const [load,setLoad]=useState(false)
    //sidebar

    const [isOpen1, setOpen1] = useState(true);
    const [isOpen2, setOpen2] = useState(true);
    const [isOpen3, setOpen3] = useState(true);
    const [isOpen4, setOpen4] = useState(true);
    const [isOpen5, setOpen5] = useState(true);
    const toggleItemM1 = () => setOpen1(!isOpen1);
    const toggleItemM2 = () => setOpen2(!isOpen2);
    const toggleItemM3 = () => setOpen3(!isOpen3);
    const toggleItemM4 = () => setOpen4(!isOpen4);
    const toggleItemM5 = () => setOpen5(!isOpen5);

    const [checked1, setChecked1] = useState(false)
    const handleClick1 = () => setChecked1(!checked1)

    const gender =["Men's","Woman"]
    const kid = ["Boys","Girls"]
    const feature = ['Nike Air Max ','Hunter' ,'UltraBoost','Superstar']
    const size =[]
    for (let i=28; i <=45 ; i++){
        size.push(i);
    }


    const [sale,setSale]=useState(false)


    const [data,setData]=useState([]);
    const [dataToShow, setDataToShow] = useState([]);
    let  params  = useParams();
    let history = useHistory();
    const [numberProduct,setNumberProduct]=useState(6);

    const  loadProduct = () =>{
       setLoad(true)
        if (numberProduct < Math.ceil(data.length)){
           setTimeout(()=>{
               let temp = [];
               let number = numberProduct +6;
               setNumberProduct(number)
               temp= data.slice(0,number);
               setDataToShow(temp)
               setLoad(false)
           },2000)
        }
    }

    const fetchBusinesses = useCallback(() => {
        if (params){
            let dataTemp = [];
            if (params.value==='sale'&& dataTemp.length===0){
                setSale(true)
                productList.map((props)=>{
                    if (props.price > props.originalPrice){
                        dataTemp.push(props)
                    }
                    return dataTemp;
                })
            }else if (params.value ==='all'){
                dataTemp = productList;
            }else {
                dataTemp = SearchProduct(params.value ,productList ,'gender')
            }
            if (dataTemp.length===0) {
                history.push('/locfuho/all/product')
            }
            setData(dataTemp)
            setDataToShow(dataTemp.slice(0,numberProduct))
        }
    }, [params,numberProduct,history])

    useEffect(()=>{
        fetchBusinesses()
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[fetchBusinesses])


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


    const handleSelect=(e)=>{
        setLoad(true)
       let tempProduct =[];
        let  tempData = [];
        if (e){
            tempProduct= (sortPrice(data,e,'low-high','high-low'));
            // let x = dataToShow.length;
            if (tempData.length===0){
                tempData= tempProduct.slice(0,numberProduct)
                tempData =(sortPrice(tempData,e,'low-high','high-low'));
            }

            setDataToShow(tempData);
            setData(tempProduct);
        }
        setTimeout(()=>setLoad(false),1000)
    }



    // const arr =useState([])
    const [arrValue,setArrValue]=useState([])
    const [cbBrand,setCbBand] =useState([])


    const handleChangeCheckbox = (event) =>{

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let arr = [name,value];
        let tempValue=arrValue;
        let tempBrand = cbBrand;
        let tempShow =[]
        let tempData = []
        setLoad(true)
        if (arr[1]===true){
            if (brandNameList.indexOf(arr[0])>-1) {
                tempBrand.push(arr[0])
                setCbBand(tempBrand)
            }else {
                tempValue.push(arr[0]);
                setArrValue(tempValue)
            }
        }else {
            if (brandNameList.indexOf(arr[0])>-1) {
                tempBrand.splice(tempBrand.indexOf(arr[0]),1)
                setArrValue(tempBrand)
            }else {
                tempValue.splice(arrValue.indexOf(arr[0]),1)
                setArrValue(tempValue)
            }
        }

        if (tempBrand.length>0){

            tempData=[];
            tempBrand.map((props=>{
                if (SearchProduct(props,data,'brandName').length>0){
                    let x = SearchProduct(props,data,'brandName')
                    Array.prototype.push.apply(tempData,x)
                }
                return tempData
            }))
            if (tempValue.length>0){
                tempValue.map((props)=>{
                    if (SearchProduct(props,tempData,'gender').length>0){
                        let x = SearchProduct(props,tempData,'gender');
                        tempData=[];
                        Array.prototype.push.apply(tempData,x)
                    }
                    return tempData
                })
            }
        }else
        if(tempValue.length>0&&tempBrand.length===0){
            tempData=[];
            tempValue.map((props)=>{
                if (SearchProduct(props,data,'gender').length>0){
                    let x = SearchProduct(props,data,'gender')
                    Array.prototype.push.apply(tempData,x)
                }
                return null
            })
        }else
        if (tempValue.length===0&&tempBrand.length===0){
            fetchBusinesses()
        }
        console.log(tempData)


        if (tempData.length>0&&tempShow.length===0){
              tempShow = tempData.slice(0,numberProduct);
              setData(tempData)
              setDataToShow(tempShow)
        }
        setTimeout(()=>setLoad(false),1000)
    }

    return(
            <>
                <div className='body-website'>
                    <SlideAlert/>
                    <div  style={isTop===true ? styleCss :null} className="product-show">
                        <Navbar style={{height: isTop===true?'60px':'',background:'#fff' }}  variant='white' className="header-product justify-content-between mb-0">
                            <Form inline>
                                <Navbar.Brand  className=' ml-3 text-dark' href={`/locfuho/${params.value}/product`}>
                                    <h5 className='mt-4'  >{params?params.value +" Shoes": "Product Shoes"} <strong className='text-danger'>({data?data.length:''})</strong></h5>
                                </Navbar.Brand>
                            </Form>
                            <Form inline className='mr-5' variant='white'>
                                <Button   onClick={() =>setStatus(!status)}>
                                    {status===false ?
                                        <>
                                            Show Filer {' '}
                                            <i className="now-ui-icons design_bullet-list-67 "></i>
                                        </>:
                                        <>  Hiden Filter {' '}
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
                                    <Dropdown.Item eventKey="low-high" className='hvr-float-shadow'>Price: Low-High</Dropdown.Item>
                                    <Dropdown.Item eventKey="high-low" className='hvr-float-shadow'>Price: High-High</Dropdown.Item>
                                </DropdownButton>
                            </Form>
                        </Navbar>
                    </div>

                    <div className='container-fluid'>
                        <Row className='product-all'>
                            <div  style={{width : status ===true ?'17%':'0'}}  className='product-left d-none d-md-block'>
                                <Form style={{display : status ===true ?'block':'none'}}>
                                    {params.value === 'all' || params.value ==='sale' ?
                                    <Accordion >
                                        <Accordion.Toggle  as={Card.Header}  >
                                            <Row onClick={toggleItemM1}>
                                                <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                                    Gender
                                                </div>

                                                <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                                    {isOpen1===false ?
                                                        <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                                        <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                                    }
                                                </div>
                                            </Row>

                                        </Accordion.Toggle>
                                        {
                                            gender.map((prop,index)=>{
                                                return(
                                                    <Accordion.Collapse   key={index} className={isOpen1===false?'':'show'}  >
                                                        <Card.Body  >
                                                            <Form.Check
                                                                custom
                                                                type='checkbox'
                                                                id={`custom-gender-${prop}`}
                                                                label={prop}
                                                                name={prop}
                                                                onChange={handleChangeCheckbox}
                                                            />
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                )
                                            })
                                        }
                                    </Accordion>:null}
                                    {params.value === 'all' || params.value ==='sale' ?
                                        <Accordion>
                                            <Accordion.Toggle as={Card.Header}>
                                                <Row onClick={toggleItemM2}>
                                                    <div className='col-8 col-lg-9' style={{'margin': 'left'}}>
                                                        Kid's
                                                    </div>

                                                    <div className='col-4 col-lg-3' style={{'margin': 'right'}}>
                                                        {isOpen2 === false ?
                                                            <i className="now-ui-icons arrows-1_minimal-down"></i> :
                                                            <i className="now-ui-icons arrows-1_minimal-up"></i>
                                                        }
                                                    </div>
                                                </Row>
                                            </Accordion.Toggle>
                                            {kid.map((prop, index) => {
                                                return (
                                                    <Accordion.Collapse key={index}
                                                                        className={isOpen2 === false ? '' : 'show'}>
                                                        <Card.Body onClick={handleClick1}>
                                                            <Form.Check
                                                                custom
                                                                type='checkbox'
                                                                id={`custom-kid-${index}`}
                                                                label={prop}
                                                                name={prop}
                                                                onChange={handleChangeCheckbox}
                                                            />
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                )
                                            })}

                                        </Accordion>:null
                                    }
                                    <Accordion  >
                                        <Accordion.Toggle  as={Card.Header}   >
                                            <Row onClick={toggleItemM4}>
                                                <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                                    Brands
                                                </div>

                                                <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                                    {isOpen4===false ?
                                                        <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                                        <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                                    }
                                                </div>
                                            </Row>
                                        </Accordion.Toggle>

                                        {brandNameList.map((prop ,index)=>{
                                            return(
                                                <Accordion.Collapse key={index} className={isOpen4===false?'':'show'}  >
                                                    <Card.Body  >
                                                        <Form.Check
                                                            custom
                                                            type='checkbox'
                                                            id={`custom-brand-${index}`}
                                                            label={`${prop}`}
                                                            name={prop}
                                                            onChange={handleChangeCheckbox}
                                                        />
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            );
                                        })}
                                    </Accordion>
                                    <Accordion  >
                                        <Accordion.Toggle   as={Card.Header}   >
                                            <Row onClick={toggleItemM3}>
                                                <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                                    Size
                                                </div>

                                                <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                                    {isOpen3===false ?
                                                        <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                                        <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                                    }
                                                </div>
                                            </Row>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse className={isOpen3===false?'':'show'}  >
                                            <Card.Body   >
                                                {size.map((prop, index) =>{
                                                    return(
                                                        <Form.Check
                                                            key={index}
                                                            inline
                                                            custom
                                                            type='checkbox'
                                                            id={`checkbox-size-${prop}`}
                                                            label={prop}
                                                            name={prop}
                                                            className='mb-2'
                                                            onChange={handleChangeCheckbox}
                                                        />
                                                    )
                                                })}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Accordion>
                                    <Accordion  >
                                        <Accordion.Toggle  as={Card.Header}  >
                                            <Row onClick={toggleItemM5}>
                                                <div className='col-8 col-lg-9' style={{'margin':'left'}}>
                                                    Featured
                                                </div>

                                                <div className='col-4 col-lg-3' style={{'margin':'right'}}>
                                                    {isOpen5===false ?
                                                        <i className="now-ui-icons arrows-1_minimal-down"></i>:
                                                        <i  className="now-ui-icons arrows-1_minimal-up"></i>
                                                    }
                                                </div>
                                            </Row>
                                        </Accordion.Toggle>

                                        {feature.map((prop ,index)=>{
                                            return(
                                                <Accordion.Collapse key={index} className={isOpen5===false?'':'show'}  >
                                                    <Card.Body  >
                                                        <Form.Check
                                                            custom
                                                            type='checkbox'
                                                            id={`custom-feature-${index}`}
                                                            label={`${prop}`}
                                                            name={prop}
                                                            onChange={handleChangeCheckbox}
                                                        />
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            );
                                        })}
                                    </Accordion>
                                </Form>
                            </div>
                            <div style={{width : status ===true ?'83%':'100%'}} className='product-right mb-3 '>
                                <Row className='ml-15 mr-15 scroll'>
                                    {dataToShow.length>0 ?
                                        <DataProduct sale={sale} productList={dataToShow}/>:
                                        <p>No Product You Find</p>
                                    }
                                </Row>

                                <div style={{display:dataToShow.length>=data.length? 'none':'block'}}   className='moreShow text-center ' >
                                    <button  style={{'width':'150px'}}
                                             className="more-black hvr-float-shadow"
                                             disabled={load===true?true:false} onClick={loadProduct}>
                                        MORE
                                    </button>
                                </div>
                            </div>
                        </Row>

                    </div>
                    <div style={{'width':load===false?'0%':'100%','zIndex':load===false?'0':'9998'}} className="preloader d-flex align-items-center justify-content-center">
                        <div style={{'display':load===false?'none':'block'}} className="sk-chase" >
                            <div  className="sk-chase-dot"></div>
                            <div  className="sk-chase-dot"></div>
                            <div  className="sk-chase-dot"></div>
                            <div  className="sk-chase-dot"></div>
                            <div  className="sk-chase-dot"></div>
                            <div  className="sk-chase-dot"></div>
                        </div>
                    </div>
                </div>
            </>
    )
}