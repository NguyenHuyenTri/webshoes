import React, {useRef, useState} from "react";
import PanelHeader from "components/Admin/PanelHeader/PanelHeader";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Row,
    Table,
    Button, FormGroup, Label, Input, FormFeedback, InputGroupText, InputGroupAddon, InputGroup,
} from "reactstrap";
import {dataScrollHome, dataSlideHome} from 'variables/slide'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

import NotificationAlert from "react-notification-alert";
import Modal from "react-bootstrap/Modal";
import 'static/website/active.css'
import  {productList} from 'variables/product'
import {to_slug} from "views/to_slug";
import Accordion from "react-bootstrap/Accordion";
import Viewer from "react-viewer";
import ScrollData from "views/Admin/Page/ScrollData";

const dataConfig = {
    tempData:dataScrollHome,
    tempProduct:productList,
    tempLocal:'localScrollHome',
    templeTitle:'The Latest & Greatest',
}

export default function PageHome() {

    const notificationAlert =useRef(null);
    const [show, setShow] = useState(false);
    const [load,setLoad]=useState(false)
    const [id,setId]=useState('')

    const [image,setImage]=useState(null)
    const [file,setFile]=useState()

    const [productsList,setProductList]=useState(productList)
    const [product,setProduct]=useState('');
    const [data,setData]=useState(dataSlideHome)
    const [search,setSearch]=useState('')
    const [title,setTitle]=useState('')
    const [viewImage,setViewImage]=useState(null)
    const [ordinal,setOrdinal]=useState(true);
    const [temp,setTemp]=useState('')
    const [visible,setVisible]=useState(false);

    const [validImage,setValidImage]=useState(false);
    const [invalidImage,setInvalidImage]=useState(false);
    const [validProduct,setValidProduct]=useState(false);
    const [inValidProduct,setInvalidProduct]=useState(false);
    const [invalidTitle,setInvalidTitle]=useState(false);
    const [validTitle,setValidTitle]=useState(false)

    const [messageImage,setMessageImage]=useState('');
    const [messageProduct,setMessageProduct]=useState('');
    const [messageTitle,setMessageTitle]=useState('')


    const Alert = (status,message) =>{
        let options = {};
        options = {
            place: 'tr',
            message: (
                <div>
                    <div>
                        {status} <b>{message}</b>
                    </div>
                </div>
            ),
            type: 'primary',
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 3,
        };
        notificationAlert.current.notificationAlert(options);
    }
    const resetValue = () =>{
        setProduct('');
        setImage('')
        setTitle('')
        setViewImage('')
    }

    const validFalse = () =>{
        setValidProduct(false)
        setValidTitle(false)
        setValidImage(false)
    }
    const inValidFalse = () =>{
        setInvalidTitle(false)
        setInvalidImage(false)
        setInvalidProduct(false)
    }

    const submitFalse = () =>{
        if (validTitle===false){
            setInvalidTitle(true)
            setMessageTitle('Please Length Input >10')
        }
        if (validImage===false){
            setInvalidImage(true)
            setMessageImage('Please Choose File')
        }
        if (validProduct===false){
            setInvalidProduct(true)
            setMessageProduct('Please Choose Product')
        }
    }

    const deteleId = (index) =>{
            const temp = [...data];
            temp.splice(index,1)
            setData(temp);
            localStorage.setItem('localSlideHome',JSON.stringify(temp))
            let status = "Detele";
            let message = "Success"
            Alert(status,message)
    }

    const searchData = (event) =>{
        let x = [];
        event.preventDefault()
        let searchChange = event.target.value;
        setSearch(searchChange);
        console.log(searchChange)
        if (searchChange.length>=4){
            productList.map((prop) => {
                if ( (to_slug(prop.productName)).indexOf(to_slug(searchChange)) > -1 ) {
                    x.push(prop)
                }
                return null;
            })
        }

        if (searchChange.length<=3){
            setProductList(productList)
        }else {
            setProductList(x);
        }
    }

    const addImageSlide = () =>{
        resetValue()
        validFalse()
        setId('')
        setShow(true)
    }
    const  findId = (index) =>{
        if (index!==''){
            setId(index)
            setOrdinal(true)
            let dataUpdate = data[index];
            setShow(true)
            setTitle(dataUpdate.title)
            setViewImage(dataUpdate.image)
            setImage(dataUpdate.image);
            setProduct(dataUpdate.productName)
            setValidTitle(true)
            setValidProduct(true)
            setValidImage(true)
            inValidFalse()
        }
    }
    const handleChangeProduct = (event) =>{
        event.preventDefault()
        let products = event.target.value;
        if (products!=='SELECT'){
            setValidProduct(true)
            setInvalidProduct(false)
            setMessageProduct('Amazing Good Job')
        }else {
            setInvalidProduct(true)
            setValidProduct(false)
            setMessageProduct('Please Choose Product')
        }
        setProduct(products);
    }

    const handleChangeTitle = (event) =>{
        let title = event.target.value;
        if (title.length>=10){
            setValidTitle(true);
            setInvalidTitle(false);
            setMessageTitle('Amazing Good Job');

        }else {
            setValidTitle(false);
            setInvalidTitle(true);
            setMessageTitle('Please Length Input >10');
        }
        setTitle(title)
    }

    const handleChangeImage = (event) =>{
        event.preventDefault();
        if (event.target.value){
            let reader = new FileReader();
            let file = event.target.files[0];
            let fileType = event.target.files[0].type;

            switch(fileType) {
                case 'image/png':
                case 'image/gif':
                case 'image/jpeg':
                case 'image/pjpeg':
                    reader.onloadend = () =>{
                        setFile(file)
                        setValidImage(true)
                        setInvalidImage(false)
                        setMessageImage('Acceptable image file!')
                        setImage(reader.result)
                        setViewImage(reader.result);
                    }
                    break;
                default:
                    setValidImage(false)
                    setInvalidImage(true)
                    setMessageImage('Unsupported File')
                    setImage('')
            }
            reader.readAsDataURL(file);
        }else{
            setValidImage(false)
            setInvalidImage(true)
            setMessageImage('Please Choose File')
            setFile(null)
        }
    }

    const saveSlideImage = (event) =>{
        event.preventDefault()
        let x = dataSlideHome;
        if (validProduct===true&&validImage===true&&validTitle===true){
                setLoad(true)
                let push =  {
                    brandName:"",
                    productName:'',
                    title:title,
                    image:image,
                };
            productList.filter((prop)=>{
                if (prop.productName===product){
                    push.brandName=prop.brandName;
                    push.productName=prop.productName;
                }
                return null;
            })
            x.unshift(push)

                setTimeout(()=>{ localStorage.setItem('localSlideHome',JSON.stringify(x));
                let status = 'Save';
                let message="Success";
                setLoad(false);
                setShow(false);
                Alert(status,message);
                resetValue()
                validFalse()
                setProductList(productList)
            },2000)

        }else {
            submitFalse()
        }
    }
    const updateSlideImage= (event) =>{
        event.preventDefault()

        let x = dataSlideHome;
        if (validProduct===true&&validImage===true&&validTitle===true){
            setLoad(true)
            let push =  {
                brandName:'',
                productName:product,
                title:title,
                image:image,
            };
            productList.filter((prop)=>{
                if (prop.productName===product){
                    push.brandName=prop.brandName;
                }
                return null;
            })
            x[id]=push;

            setTimeout(()=>{ localStorage.setItem('localSlideHome',JSON.stringify(x));
                setLoad(false);
                setShow(false);
                let status = 'Save';
                let message="Success";
                Alert(status,message);
                resetValue()
                validFalse()
                setProductList(productList)
            },2000)
        }else {
            submitFalse()
        }
    }
   const removeSearch = () =>{
       setProductList(productList)
       setSearch('')
   }


   const handleOrdinal = (event) =>{
        event.preventDefault()
        setOrdinal(false)
   }
   const handleChangeId = (event) =>{
       event.preventDefault()
       setTemp(event.target.value);
    }
    const submitOrdinal = (event) =>{
        event.preventDefault()
        // let x = id;
        let y=temp;
        let data={};
        setLoad(true)
        data = dataSlideHome[id];
        dataSlideHome[id]=dataSlideHome[y];
        dataSlideHome[y]=data;

        setTimeout(()=>{
            localStorage.setItem('localSlideHome',JSON.stringify(dataSlideHome));
            setId(y);
            setOrdinal(true)
            setLoad(false)
            setShow(false)
            Alert('Update Ordinal Number' ,'Success');

        },2000)

    }

    const  handleClickCapture = (image) =>{
        setVisible(true)
        setImage(image);
    }


    return(
            <>
                <div onClick={()=>setVisible(false)}>
                <Viewer
                    visible={visible}
                    onClose={() => {
                        setVisible(false)
                        setImage('')
                    } }
                    noToolbar={true}
                    noNavbar={true}
                    drag={false}
                    images={[{src: image, alt: ''}]}
                />
                </div>

                <PanelHeader
                    content={
                        <div className="header text-center">
                            <h2 className="title">Home Page Management</h2>
                        </div>
                    }
                />
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
                <NotificationAlert ref={notificationAlert} />
                <div className="content">
                    <Row>
                        <Col xs={12} className='mb-0'>
                            <ScrollData {...dataConfig}  />
                        </Col>
                        <Col xs={12} >
                            <Accordion defaultActiveKey='0' >
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">
                                        <Accordion.Toggle size='sm' as={CardTitle} variant="link" eventKey="0">
                                            Slide Home!
                                        </Accordion.Toggle>
                                    <Button className='ml-3 btn-primary' onClick={addImageSlide} size='sm'>
                                        <i className="now-ui-icons ui-1_simple-add"></i>
                                        {' '}New</Button>
                                    </CardTitle>
                                </CardHeader>
                                <Accordion.Collapse eventKey="0" >
                                <CardBody className="all-icons">
                                    <Table responsive hover>
                                        <thead className="text-primary">
                                        <tr className='text-center'>
                                            <th>#</th>
                                            <th>Brand</th>
                                            <th>Name</th>
                                            <th>Title</th>
                                            <th>Image</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                                {data.map((props,index)=>{
                                                    return(
                                                        <tr key={index} className='text-center'>
                                                            <td >{index}</td>
                                                            <td >{props.brandName}</td>
                                                            <td >{props.productName}</td>
                                                            <td >{props.title}</td>
                                                            <td >
                                                                <img className='img-fluid rounded'
                                                                     src={props.image}
                                                                     alt="..." width='300px'
                                                                     onClickCapture={handleClickCapture.bind(this,props.image)}
                                                                     height='200px'/>
                                                            </td>
                                                            <td className="text-right" width='150px'>
                                                                <Button size='sm' outline color="danger"
                                                                        className='mb-1 mb-lg-0'
                                                                onClick={findId.bind(this,index)}>
                                                                    <FontAwesomeIcon  icon={faEdit}/>
                                                                </Button>{' '}
                                                                <Button size='sm' outline color="danger"
                                                                  onClick={deteleId.bind(this,index)}      className='mb-1 mb-lg-0'>
                                                                    <FontAwesomeIcon  icon={faTrash}/></Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                        </tbody>
                                    </Table>
                                </CardBody>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </Col>
                    </Row>

                </div>



                <Modal centered size="lg" show={show}
                       aria-labelledby="contained-modal-title-vcenter"
                        animation={true} onHide={()=>setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{id===''?'Add Slide Home':'Update Slide Home'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            {id===''?null:
                                <Row  >
                                    <Col md="8" className='my-1'>
                                        <FormGroup >
                                            <label>Ordinal number</label>
                                            <Input
                                                type="select"
                                                name='product'
                                                onChange={handleChangeId}
                                                defaultValue={id}
                                                disabled={ordinal}
                                            >
                                                {dataSlideHome.map((props,index) =>{
                                                    return(
                                                        <option value={index} key={index} >
                                                            {index}
                                                        </option>)
                                                })}
                                            </Input>

                                        </FormGroup>
                                    </Col>
                                    <Col md='4'>
                                        <Button size='sm' className='btn mt-5'
                                        onClick={ordinal===true ?handleOrdinal :submitOrdinal }
                                        >{ordinal===true ?'Edit Ordinal number':'Update Ordinal number'}</Button>
                                    </Col>
                                </Row>
                            }
                            <Row>
                                <Col md="8" className='my-1'>
                                    <FormGroup>
                                        <label>Product</label>
                                        <Input
                                            type="select"
                                            name='product'
                                            onChange={handleChangeProduct}
                                            valid={validProduct}
                                            invalid={inValidProduct}
                                            value={product}
                                        >
                                            <option>SELECT</option>
                                            {productsList.map((number,index) =>{
                                                return(
                                                    <option value={number.productName} key={index} >
                                                    {number.productName}
                                                </option>)
                                            })}
                                        </Input>
                                        <FormFeedback valid>{messageProduct}</FormFeedback>
                                        <FormFeedback >{messageProduct}</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md="4" className='my-1'>
                                    <FormGroup>
                                        <label>Search Product</label>
                                        <InputGroup className="no-border">
                                        <Input type='text' value={search} onChange={searchData} name='searchData' placeholder="Search..." />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText >
                                                {search ==='' ?
                                                    <i className="now-ui-icons ui-1_zoom-bold  " />:
                                                    <i className="now-ui-icons ui-1_simple-remove " onClick={removeSearch} />
                                                }
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row >
                               <Col>
                                   <FormGroup  >
                                       <label>Title</label>
                                       <Input style={{'border':'1px solid #e83e8c'}}  type='textarea' name="title"
                                       value={title} onChange={handleChangeTitle}
                                              valid={validTitle}
                                              invalid={invalidTitle}/>
                                       <FormFeedback valid>{messageTitle}</FormFeedback>
                                       <FormFeedback >{messageTitle}</FormFeedback>
                                   </FormGroup>

                               </Col>
                            </Row>
                            <Row>
                                <Col md='6' className='my-1'>
                                    <FormGroup>
                                        <Label >Image</Label>
                                    </FormGroup>
                                    <Input type="file" id="imageFile"
                                           name='image'
                                           valid={validImage}
                                           invalid={invalidImage}
                                           onChange={handleChangeImage} />
                                    <FormFeedback valid>{messageImage}</FormFeedback>
                                    <FormFeedback >{messageImage}</FormFeedback>
                                </Col>
                                <Col md='6'>
                                    {file!==null?
                                        <img src={viewImage}  alt=''/>:null
                                    }
                                </Col>
                            </Row>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn btn-danger' onClick={id===''?saveSlideImage:updateSlideImage} >
                            {id===''?' Save Changes':' Update Changes'}
                        </Button>
                        <Button className='btn btn-dark' onClick={()=>setShow(false)}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
    )
}