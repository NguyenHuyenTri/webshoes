import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faTrash, faEdit, faFastBackward, faStepBackward, faStepForward, faFastForward, faEye,
} from "@fortawesome/free-solid-svg-icons";

import {
  Card, CardHeader, CardBody, Row, Col, Table, InputGroup, Input,
  InputGroupAddon, InputGroupText, CardFooter, FormGroup,
  Form, Label, FormFeedback,

} from "reactstrap";

import {Button} from 'react-bootstrap'
import PanelHeader from "components/Admin/PanelHeader/PanelHeader.js";
import { productList, thead,} from 'variables/product';
import {brandNameList} from "variables/data";

import Viewer from 'react-viewer';
import NotificationAlert from "react-notification-alert";
import {Link} from "react-router-dom";
import {formatNumber} from "views/to_slug";
import {SearchProduct} from 'components/Search'
import Modal from "react-bootstrap/Modal";

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productList:[],
      visible: false,
      setVisible:false,
      image:'',
      currentPage :1 ,
      productListPerPage:4,
      handleChangeSelect:'',
      visiblee:false,
      dataImageProduct:[],
      showDataImage:false,
      key:0,
      update:false,
      imagePreviewUrl:'',img:'',
    };
    this.deteleProduct=this.deteleProduct.bind(this);
    this.handleChangeImage=this.handleChangeImage.bind(this)
  }

  validState={

  }

  componentDidMount() {
    this.getProductList()
  }

  deteleProduct = (key) =>{
    productList.splice(key,1)
    localStorage.setItem("localProduct",JSON.stringify(productList));
    let options = {};
    options = {
      place: 'tr',
      message: (
          <div>
                  Detele <b className='text-dark'>{' '}{productList[key].productName}{' '}</b>Success
          </div>
      ),
      type: 'primary',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 3,
    };
    this.refs.notificationAlert.notificationAlert(options);
    this.getProductList()
    }

  getProductList(){
    this.setState({
      productList:productList,
    })
  }

  handleClickCapture = (image ,event) =>{
    this.setState({
      visible: 'visible',
      setVisible:true,
      zIndex:'3',
      image:image,
    })
    event.preventDefault()
  }

  closeImageZoom = (event) =>{

    this.setState({
      visible: false,
      setVisible:false
    })
    event.preventDefault()
  }

  firstPage = (event) =>{
    if (this.state.currentPage >1){
      this.setState({
        currentPage :1
      });
    }
  };

  lastPage = (event) =>{
    if (this.state.currentPage < Math.ceil(this.state.productList.length/this.state.productListPerPage)){
      this.setState({
        currentPage :Math.ceil(this.state.productList.length/this.state.productListPerPage)
      });
    }
  };

  prevPage = (event) =>{
    if (this.state.currentPage >1){
      this.setState({
        currentPage :this.state.currentPage -1
      });
    }
  };

  nextPage = (event) =>{
    if (this.state.currentPage < Math.ceil(this.state.productList.length/this.state.productListPerPage)){
      this.setState({
        currentPage :this.state.currentPage +1
      });
    }
  };

  changePage = (event) =>{
    const toTal =this.state.productListPerPage;
    console.log(toTal)
    if (event.target.value===0 || event.target.value ===null){
      this.setState({
        [event.target.name]: 1
      });
    }else if (event.target.value > toTal){
      this.setState({
        [event.target.name]: toTal
      });
    }else {

      this.setState({
        [event.target.name]: parseInt(event.target.value)
      });
    }

  };

  handleChangeSelect= (event,currentPage) =>{
    currentPage=1;
    var x =[]
        productList.map((prop) =>{
            if (event.target.value===prop.brandName){
              x.push(prop)
            }
            return null
      })
    if (event.target.value ==='SEARCH SELECT BRAND NAME'){
      this.setState({
        productList:productList,
      })
    }else {
      this.setState({
        productList:x,
        currentPage:currentPage
      })
    }
    event.preventDefault()
  }

  searchData= (event,currentPage) =>{

    currentPage = 1;
    var x =[]
    if (event.target.value.length >= 3) {
     x = SearchProduct(event.target.value, productList, '')
    }
    if (event.target.value.length < 3){
      this.setState({
        productList:productList,
      })
    }else {
      this.setState({
        productList:x,
        currentPage:currentPage
      })
    }
    event.preventDefault();
  }

  viewImage = (data ,key,event) =>{
        this.setState({
          dataImageProduct:data,
          showDataImage:true,
          key:key
        })
      event.preventDefault()
  }
  deteleImage = (index)=>{
    console.log(index)
    let temp =this.state.dataImageProduct;
    let dataProduct =productList;
    temp.splice(index,1)
    dataProduct[index].dataImage=temp;
    this.setState({dataImageProduct:temp})
    localStorage.setItem('localProduct',JSON.stringify(dataProduct))
  }
  updateImage = () =>{
      this.setState({update:true})
  }
  handleChangeImage = (event) =>{
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
            this.setState({
              file:file,
              imagePreviewUrl:reader.result,
              validImage: true,
              invalidImage: false,
              messageImage:'Acceptable image file!',
              image:reader.result,
            })
          }
          break;
        default:
          this.setState({
            validImage: false,
            invalidImage: true,
            messageImage:'Unsupported File',
            image:''
          })
      }
      reader.readAsDataURL(file);
    }else{
      this.setState({
        validImage: false,
        invalidImage: true,
        messageImage:'',
        imagePreviewUrl:'',
      })
    }
  }
  saveImage=(event)=>{
    if (this.state.validImage===true){
      let temp =this.state.dataImageProduct;
      let dataProduct =productList;
      temp.unshift(this.state.imagePreviewUrl)
      dataProduct[this.state.key].dataImage=temp;
      this.setState({dataImageProduct:temp,update:false})
      localStorage.setItem('localProduct',JSON.stringify(dataProduct))
    }
    event.preventDefault()
  }

  render() {
    const {productList,visible,image} =this.state;
    const {currentPage ,productListPerPage} =this.state;
    const {selectBrandName,searchData} =this.state;
    const lastIndex = currentPage * productListPerPage;
    const firstIndex =lastIndex - productListPerPage;
    const currentProductList = productList.slice(firstIndex,lastIndex);
    const totalPages = productList.length/productListPerPage;
    const {dataImageProduct,showDataImage}=this.state;
    const {messageImage,invalidImage ,validImage,imagee} =this.state
    const {update}=this.state;
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content" >
          <NotificationAlert ref="notificationAlert" >
          </NotificationAlert>
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <div style={{"float":"left"}}>
                    <h5 className="title">PRODUCTS LIST</h5>
                  </div>
                  <div style={{"float":"right","marginRight":"30px"}}>
                    <form>
                      <InputGroup className="no-border">
                        <Input type='text' value={searchData} name='searchData'  onChange={this.searchData}  placeholder="Search..." />
                        <InputGroupAddon addonType="append">
                          <InputGroupText >
                                <i className="now-ui-icons ui-1_zoom-bold" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </form>
                  </div>
                  <div style={{"float":"right","marginRight":"30px"}}>
                    <form>
                      <FormGroup >
                        <Input  type="select"   value={selectBrandName} onChange={this.handleChangeSelect} name="selectBrandName">
                          <option >SEARCH SELECT BRAND NAME</option>
                          {brandNameList.map((index) =>{
                            return (<option key={index} value={index} >{index}</option>)
                          })}
                        </Input>
                      </FormGroup>
                    </form>
                  </div>
                </CardHeader>
                <CardBody className="all-icons">
                  <Table responsive hover>
                    <thead className="text-primary">
                    <tr>
                        <th>Brand Name</th>
                        <th>Product Name</th>
                        <th>Original Price</th>
                        <th>Price</th>
                        <th>Gender</th>
                        <th>Image</th>
                        <th className="text-right"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentProductList.map((prop, key) => {
                      return(
                          <tr key={key}>
                              <td>{prop.brandName}</td>
                              <td>{prop.productName}</td>
                              <td>{formatNumber(prop.originalPrice)}</td>
                              <td>{formatNumber(prop.price)}</td>
                              <td>{prop.gender}</td>
                              <td >
                                <img className='img-fluid rounded'
                                     src={prop.image}
                                     alt="..." width='75px'
                                     onClickCapture={(event) =>this.handleClickCapture(prop.image,event)}  height='75px'/>

                              </td>
                              <td className="text-right">
                                <Button size='sm' variant='secondary '
                                        className='mb-1 mb-lg-0'
                                        onClick={this.viewImage.bind(this,prop.dataImage,key)}
                                >
                                  <FontAwesomeIcon  icon={faEye}/>
                                </Button>{' '}
                                <Link size='sm'  className="btn btn-sm btn-outline-primary"
                                      to={'/admin/update/'+(key)}
                                    >
                                  <FontAwesomeIcon  icon={faEdit}/></Link>{' '}
                                <Button size='sm' variant='danger'
                                        onClick={this.deteleProduct.bind(this ,key)}>
                                  <FontAwesomeIcon  icon={faTrash}/></Button>
                              </td>

                          </tr>
                      )
                    })}
                    </tbody>

                  </Table>
                </CardBody>
                <CardFooter >
                  <div style={{"float":"left"}} className='mb-2'>
                    Showing Page {currentPage} of {totalPages}
                  </div>
                  <div style={{"float":"right"}} className='mb-2'>
                    <Form inline>
                    <FormGroup >
                        <Button style={{"marginRight":"5px"}} size="sm" type="button" disabled={currentPage===1 ?true :false}
                                className='mx-1'
                                onClick={this.firstPage} >
                          <FontAwesomeIcon icon={faFastBackward}/> Firts
                        </Button>
                        <Button size="sm"  type="button" disabled={currentPage===1 ?true :false}
                                onClick={this.prevPage}>
                          <FontAwesomeIcon icon={faStepBackward}/> Prev
                        </Button>
                      <Input size="sm"   style={{"height":"30px","width":"50px"}}  className={"mx-2 my-1"}
                             onChange={this.changePage} name={"currentPage"} value={currentPage}/>
                        <Button  size="sm" type="button"  className='mx-1'
                                 disabled={currentPage >= totalPages ?true :false}
                                 onClick={this.nextPage}>
                          <FontAwesomeIcon icon={faStepForward}/>Next
                        </Button>
                        <Button size="sm"  type="button"
                                disabled={currentPage >= totalPages  ? true :false}  onClick={this.lastPage}>
                          <FontAwesomeIcon icon={faFastForward}/>Last
                        </Button >
                    </FormGroup> {' '}

                    </Form>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <div onClick={this.closeImageZoom} style={{'zIndex':'1'}}>
            <Viewer
                visible={visible}
                onClose={() => {
                  this.setState({
                    visiblee: false,
                    setVisible:false
                  })
                } }
                noToolbar={true}
                noNavbar={true}
                drag={false}
                images={[{src: image, alt: ''}]}
            />
          </div>
        </div>
        <Modal show={showDataImage} aria-labelledby="contained-modal-title-vcenter"
               backdrop="static"
               size="lg"
               centered
               onHide={()=>this.setState({showDataImage:false})}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <Button size='sm' variant='secondary'
                                           className='mb-1 mb-lg-0'
                                           onClick={this.updateImage}
            > New {' '}
              <i className="now-ui-icons ui-1_simple-add" style={{'fontSize': '13px'}}></i>
            </Button>{' '}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <div  style={{ display: update===true ? 'none':'block' }}>
              <Table responsive hover >
                <thead className="text-primary">
                <tr className='text-center'>
                  <th>#</th>
                  <th>Image</th>
                  <th></th>
                  <th></th>
                </tr>
                </thead>
                <tbody >
                {dataImageProduct.map((props,index)=>{
                  return(
                      <tr key={index} className='text-center'>
                        <td >{index}</td>
                        <td >
                          <img className='img-fluid rounded'
                               src={props}
                               alt="..." width='500px'
                               height='400px'/>
                        </td>
                        <td className="text-right" width='50px'>

                          <Button size='sm' variant='danger'
                                  className='mb-1 mb-lg-0 '
                                  onClick={this.deteleImage.bind(this,index)}
                          >
                            <FontAwesomeIcon  icon={faTrash}

                            />
                          </Button>
                        </td>

                      </tr>
                  )
                })}
                </tbody>
              </Table>
            </div>
            <div style={{ display: update===false ? 'none':'block' }}>
              <Row>
                <Col md='12' className='my-1'>
                  <FormGroup>
                    <Label >Image</Label>
                  </FormGroup>
                  <Input type="file" id="imageFile"
                         defaultValue={imagee} name='imagee'
                         valid={validImage}
                         invalid={invalidImage}
                         onChange={this.handleChangeImage} />
                  <FormFeedback valid>{messageImage}</FormFeedback>
                  <FormFeedback >{messageImage}</FormFeedback>
                </Col>
                <Button variant='secondary ml-3' onClick={this.saveImage}>Save</Button>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{this.setState({showDataImage:false})}}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ProductList;
