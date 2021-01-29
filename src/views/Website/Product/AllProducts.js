import React, {useCallback, useEffect, useState} from "react";
import SlideAlert from "components/Website/Slide/SlideAlerts";
import {Button, Dropdown, DropdownButton, Form, Navbar, Row,Card,Accordion}
        from "react-bootstrap";
import {brandNameList} from "variables/data";
import DataProduct from "./DataProduct";
import {useParams,useHistory} from "react-router";
import {SearchProduct,SearchMany} from 'components/Search'
import {productList} from "variables/product";
import {sortPrice} from 'views/to_slug';

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
    const [isOpen4, setOpen4] = useState(true);
    const toggleItemM1 = () => setOpen1(!isOpen1);
    const toggleItemM2 = () => setOpen2(!isOpen2);
    const toggleItemM4 = () => setOpen4(!isOpen4);


    const [checked1, setChecked1] = useState(false)
    const handleClick1 = () => setChecked1(!checked1)

    const gender =["All","Men's","Woman"]
    const kid = ["Boys","Girls"]
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
           },500)
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




    const [search,setSearch]=useState(['',''])

    const handleChangeCheckbox = (event) =>{

        const target = event.target;
        const value = target.type === 'checked' ? target.checked : target.value;
        const name = target.name;

        let tempShow =[]
        let tempData = []

        setLoad(true)

        let arr = [name,value];
        let tempSearch = search;

        if (arr[0]==='radio-gender'){
            if (arr[1]==='All'){
                tempSearch[0]='';
            }else {
                tempSearch[0]=(arr[1]);
            }
            setSearch(tempSearch);
        }else  if (arr[0]==='radio-brandName'){
            tempSearch[1]=arr[1];
            setSearch(tempSearch);
        }

        let dataSearch = []
        if (params.value==='all'){
            dataSearch=productList;
        }else {
            dataSearch = SearchProduct(params.value ,productList ,'gender')
        }
        tempData = SearchMany(search[1],search[0],dataSearch)
        setData(tempData)
        tempShow = tempData.slice(0,numberProduct)
        setDataToShow(tempShow)
        setTimeout(()=>setLoad(false),500)
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
                                                                type='radio'
                                                                id={`custom-gender-${prop}`}
                                                                label={prop}
                                                                name='radio-gender'
                                                                value={prop}
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
                                                                type='radio'
                                                                id={`custom-kid-${index}`}
                                                                label={prop}
                                                                value={prop}
                                                                name='radio-gender'
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
                                                            type='radio'
                                                            id={`custom-brand-${index}`}
                                                            label={`${prop}`}
                                                            name='radio-brandName'
                                                            value={prop}
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
                                             disabled={load===true?true:false}
                                             className="more-black hvr-float-shadow"
                                              onClick={loadProduct}>
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