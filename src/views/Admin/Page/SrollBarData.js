// import React, {useRef, useState} from "react";
// import {
//     Button,
//     Card,
//     CardBody,
//     CardHeader,
//     CardTitle, FormGroup,
//     Input,
//     InputGroup,
//     InputGroupAddon,
//     InputGroupText,
//     Table
// } from "reactstrap";
// import {Form} from 'react-bootstrap'
// import Accordion from "react-bootstrap/Accordion";
// import {dataScrollHome} from "variables/slide";
// import {productList} from "variables/product";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {
//     faEdit,
//     faFastBackward,
//     faFastForward,
//     faStepBackward,
//     faStepForward,
//     faTrash
// } from "@fortawesome/free-solid-svg-icons";
// import Viewer from "react-viewer";
// import NotificationAlert from "react-notification-alert";
// import Modal from "react-bootstrap/Modal";
// import {to_slug} from "views/to_slug";
//
//
// export default function SrollBar() {
//     const [show, setShow] = useState(false);
//     const notificationAlert =useRef(null);
//     const [visible,setVisible]=useState(false);
//     const [image,setImage]=useState('')
//     const [data,setData]=useState(dataScrollHome)
//     const [load,setLoad]=useState(false)
//     const [search,setSearch]=useState('')
//     const [id,setId]=useState('')
//
//     //productList
//
//     const [currentPage,setCurrentPage]=useState(1);
//     const [perPage]=useState(3);
//     const lastIndex = currentPage * perPage;
//     const firstIndex =lastIndex - perPage;
//     const [dataProduct,setdataProduct]=useState(productList)
//     const currentProductList = dataProduct.slice(firstIndex,lastIndex);
//     const totalPages = dataProduct.length/perPage;
//
//
//     const  firstPage = () =>{
//         if (currentPage>1){
//             setCurrentPage(1);
//         }
//     }
//
//     const lastPage = (event) =>{
//         if (currentPage < Math.ceil(dataProduct.length/perPage)){
//             setCurrentPage(Math.ceil(dataProduct.length/perPage));
//         }
//     }
//
//     const  prevPage = () =>{
//         if (currentPage>1){
//             setCurrentPage(currentPage-1);
//         }
//     }
//     const  nextPage = () =>{
//         if (currentPage < Math.ceil(dataProduct.length/perPage)){
//             setCurrentPage(currentPage+1);
//         }
//     }
//
//
//     //productList
//
//     const Alert = (status,message) =>{
//         let options = {};
//         options = {
//             place: 'tr',
//             message: (
//                 <div>
//                     <div>
//                         {status} <b>{message}</b>
//                     </div>
//                 </div>
//             ),
//             type: 'primary',
//             icon: "now-ui-icons ui-1_bell-53",
//             autoDismiss: 3,
//         };
//         notificationAlert.current.notificationAlert(options);
//     }
//
//     const  handleClickCapture = (image) =>{
//         setVisible(true)
//         setImage(image);
//     }
//
//     const searchData = (event) =>{
//         let x = [];
//         event.preventDefault()
//         let searchChange = event.target.value;
//         setSearch(searchChange);
//         if (searchChange.length>=4){
//             productList.map((prop) => {
//                 if ( (to_slug(prop.productName)).indexOf(to_slug(searchChange)) > -1 ) {
//                     x.push(prop)
//                 }
//                 return null;
//             })
//         }
//
//         if (searchChange.length<=3){
//             setdataProduct(dataProduct)
//         }else {
//             setdataProduct(x)
//         }
//     }
//
//     const removeSearch = () =>{
//             setSearch('')
//             setdataProduct(productList)
//     }
//
//     const saveProduct = (product) =>{
//         setLoad(true);
//
//         setTimeout(()=>{
//             let products = dataScrollHome;
//             products.unshift(product);
//             localStorage.setItem('localScrollHome',JSON.stringify(products));
//             setLoad(false);
//             Alert('Add','Success')
//             setShow(false);
//             setData(dataScrollHome)
//         },2000)
//
//     }
//
//     const find =(index) =>{
//
//         setId(index);
//         setShow(true)
//
//     }
//
//     const updateProduct = (product) =>{
//         setLoad(true)
//       if (product){
//           setTimeout(()=>{
//               let products = dataScrollHome;
//               products[id]=product;
//               localStorage.setItem('localScrollHome',JSON.stringify(products));
//               setLoad(false);
//               Alert('Change','Success')
//               setShow(false);
//               setData(dataScrollHome)
//           },2000)
//       }
//     }
//
//     const deteleProduct = (index) =>{
//         const temp = [...data];
//         temp.splice(index,1)
//         setData(temp);
//         localStorage.setItem('localScrollHome',JSON.stringify(temp))
//         Alert('DETELE','Success')
//     }
//
//     return(
//         <>
//             <Modal show={show} width='100%'
//                 size="lg" animation={true} onHide={()=>setShow(false)}
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title  >
//                         {id===''?'ADD ':'Change' }
//                         Product The Latest & Greatest
//                         <form>
//                             <InputGroup className="no-border">
//                                 <Input type='text' value={search} onChange={searchData} placeholder="Search..." />
//                                 <InputGroupAddon addonType="append">
//                                     <InputGroupText >
//                                         {search ==='' ?
//                                             <i className="now-ui-icons ui-1_zoom-bold  " />:
//                                             <i className="now-ui-icons ui-1_simple-remove " onClick={removeSearch} />
//                                         }
//                                     </InputGroupText>
//                                 </InputGroupAddon>
//                             </InputGroup>
//                         </form>
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body >
//                     <Table responsive hover>
//                         <thead className="text-primary">
//                         <tr className='text-center'>
//                             <th>Brand</th>
//                             <th>Name</th>
//                             <th>Image</th>
//                             <th></th>
//                             <th></th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                             {currentProductList.map((props,index)=>{
//                                 return(
//                                     <tr key={index} className='text-center'>
//                                         <td >{props.brandName}</td>
//                                         <td >{props.productName}</td>
//                                         <td >
//                                             <img className='img-fluid rounded'
//                                                  src={props.image}
//                                                  alt="..." width='100px'
//                                                  height='100px'/>
//                                         </td>
//                                         <td>
//                                             <Button className='btn-primary' size='sm'
//                                                 onClick={id===''?saveProduct.bind(this,props):updateProduct.bind(this,props)}
//                                             >{id===''?'ADD' :'Change'}
//                                                 <i className="now-ui-icons gestures_tap-01"></i>
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </Table>
//                     <div style={{"float":"left"}} className='mb-2'>
//                         Showing Page {currentPage} of {totalPages}
//                     </div>
//                     <div style={{"float":"right"}} className='mb-2'>
//                         <Form inline>
//                             <FormGroup >
//                                 <Button style={{"marginRight":"5px"}} size="sm" type="button" disabled={currentPage===1 ?true :false}
//                                         className='mx-1 btn-primary'
//                                         onClick={firstPage} >
//                                     <FontAwesomeIcon icon={faFastBackward}/> Firts
//                                 </Button>
//                                 <Button size="sm"  type="button" disabled={currentPage===1 ?true :false}
//                                         onClick={prevPage} className='btn-primary'>
//                                     <FontAwesomeIcon icon={faStepBackward}/> Prev
//                                 </Button>
//                                 <Button  size="sm" type="button"
//                                          className='btn-primary mx-1'     disabled={currentPage >= totalPages ?true :false}
//                                          onClick={nextPage}>
//                                     <FontAwesomeIcon icon={faStepForward}/>Next
//                                 </Button>
//                                 <Button size="sm"  type="button" className='btn-primary'
//                                         disabled={currentPage >= totalPages  ? true :false}  onClick={lastPage}>
//                                     <FontAwesomeIcon icon={faFastForward}/>Last
//                                 </Button >
//                             </FormGroup> {' '}
//
//                         </Form>
//                     </div>
//                 </Modal.Body>
//             </Modal>
//         <Accordion defaultActiveKey='0' >
//             <Card className="card-plain">
//                 <CardHeader>
//                     <CardTitle tag="h4">
//                         <Accordion.Toggle size='sm' as={CardTitle} variant="link" eventKey="0">
//                             Slide The Latest & Greatest
//                         </Accordion.Toggle>
//                         <Button className='ml-3 btn-primary' onClick={()=>{setShow(true);setId('')}} size='sm'>
//                             <i className="now-ui-icons ui-1_simple-add"></i>
//                             {' '}ADD</Button>
//                     </CardTitle>
//                 </CardHeader>
//                 <Accordion.Collapse eventKey="0">
//                     <CardBody className="all-icons">
//                         <Table responsive hover>
//                             <thead className="text-primary">
//                             <tr className='text-center'>
//                                 <th>#</th>
//                                 <th>Brand</th>
//                                 <th>Name</th>
//                                 <th>Image</th>
//                                 <th></th>
//                                 <th></th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {data.map((props,index)=>{
//                                 return(
//                                     <tr key={index} className='text-center'>
//                                         <td >{index}</td>
//                                         <td >{props.brandName}</td>
//                                         <td >{props.productName}</td>
//                                         <td >
//                                             <img className='img-fluid rounded'
//                                                  src={props.image}
//                                                  alt="..." width='100px'
//                                                  onClickCapture={handleClickCapture.bind(this,props.image)}
//                                                  height='100px'/>
//                                         </td>
//                                         <td className="text-right" width='150px'>
//                                             <Button size='sm' outline color="danger"
//                                                     className='mb-1 mb-lg-0'
//                                                     onClick={find.bind(this,index)}
//                                                     >
//                                                 <FontAwesomeIcon  icon={faEdit}/>
//                                             </Button>{' '}
//                                             <Button size='sm' outline color="danger"
//                                                    className='mb-1 mb-lg-0' onClick={deteleProduct.bind(this ,index)}>
//                                                 <FontAwesomeIcon  icon={faTrash}/></Button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                             </tbody>
//                         </Table>
//                     </CardBody>
//                 </Accordion.Collapse>
//             </Card>
//         </Accordion>
//             <div style={{'width':load===false?'0%':'100%','zIndex':load===false?'0':'9998'}} className="preloader d-flex align-items-center justify-content-center">
//                 <div style={{'display':load===false?'none':'block'}} className="sk-chase" >
//                     <div  className="sk-chase-dot"></div>
//                     <div  className="sk-chase-dot"></div>
//                     <div  className="sk-chase-dot"></div>
//                     <div  className="sk-chase-dot"></div>
//                     <div  className="sk-chase-dot"></div>
//                     <div  className="sk-chase-dot"></div>
//                 </div>
//             </div>
//             <NotificationAlert ref={notificationAlert} />
//             <div onClick={()=>setVisible(false)}>
//                 <Viewer
//                     visible={visible}
//                     onClose={() => {
//                         setVisible(false)
//                     } }
//                     noToolbar={true}
//                     noNavbar={true}
//                     drag={false}
//                     images={[{src: image, alt: ''}]}
//                 />
//             </div>
//         </>
//     );
// }