import React from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Input,
    Row,
    Col,
    FormFeedback,
    FormText,
    Label,
} from "reactstrap";

import PanelHeader from "components/Admin/PanelHeader/PanelHeader.js";
import {productList} from 'variables/product'
import {gender,brandNameList} from "variables/data";
import NotificationAlert from "react-notification-alert/index";



class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state=this.initialState;
        this.state=this.validState;
        this.state=this.messageState;
        this.handleChangeBrandName=this.handleChangeBrandName.bind(this)
        this.handleChangeImage=this.handleChangeImage.bind(this)
        this.handleChangePrice=this.handleChangePrice.bind(this)
        this.handleChangeProductName=this.handleChangeProductName.bind(this)
        this.submitProduct=this.submitProduct.bind(this)
        this.updateProduct=this.updateProduct.bind(this)
    }

    componentDidMount() {
        const productID = this.props.match.params.id;
        if (productID){
            this.findIdProduct(productID);
        }else {
            this.setState(this.validState)
        }

    }

    initialState ={
        productName:'',brandName:'',price:'',format:'' , file:'', imagePreviewUrl:'',img:'',show:false,gender,
    };

    validState={
        validBrandName:false,
        validProductName:false,
        validPrice:false,
        validImage:false,
        validGenderName:false,
    }

    messageState={
        messageBrandName:'',
        messageProductName:'',
        messagePrice:'',
        messageImage:'',
        messageGenderName:''
    }

    findIdProduct = (id) =>{
        if (productList[id])
        this.setState({
            productName:productList[id].productName,
            brandName:productList[id].brandName,
            format:this.formatNumber(productList[id].price),
            image:productList[id].image,
            price:productList[id].price,
            genderName:productList[id].gender,
            updateProduct:true,
            imagePreviewUrl:productList[id].image,
            validBrandName:true,
            validProductName:true,
            validGenderName:true,
            validPrice:true,
            validImage:true,
            messageBrandName:'Amazing Good Job',
            messageProductName:'Amazing Good Job',
            messagePrice:'Amazing Good Job',
            messageImage:'Acceptable image file!',
            messageGenderName:'Amazing Good Job',
            color:'',
        })
    }

    handleChangeBrandName = (event) =>{
        event.preventDefault();
        let brandName =event.target.value;
        if (brandName.length !== null && brandName !=='SELECT BRAND NAME' ){
            this.setState({
                validBrandName:true,
                invalidBrandName:false,
                messageBrandName:'Amazing Good Job',
                brandName:brandName,
                color:''
            })
        }else {
            this.setState({
                validBrandName:false,
                invalidBrandName:true,
            })
        }
    }
    handleChangeGenderName = (event) =>{
        event.preventDefault();
        let genderName =event.target.value;
        if (genderName.length !== null && genderName !=='SELECT GENDER NAME' ){
            this.setState({
                validGenderName:true,
                invalidGenderName:false,
                messageGenderName:'Amazing Good Job',
                genderName:genderName,
                color:''
            })
        }else {
            this.setState({
                validGenderName:false,
                invalidGenderName:true,
            })
        }
    }
    handleChangeProductName = (event)=>{
        event.preventDefault()
        let productName =event.target.value;
        if(productName.length >=4 && productName!== ''){
            this.setState({
                validProductName: true,
                invalidProductName: false,
                messageProductName: 'Amazing Good Job',
                productName: productName,
            })
        }else{
            this.setState({
                validProduct: false,
                invalidProduct: true,
                productName: productName,
            })
        }
    }

    handleChangePrice = event=>{
        event.preventDefault()
        let price =event.target.value.replace(/([^0-9a-z-\s])/g, '');
        let regex=/^[0-9]+$/;
        if (price.length >4 && price.match(regex)) {
            this.setState({
                validPrice: true,
                invalidPrice: false,
                messagePrice: 'Amazing Good Job',
                price:price,
                format: this.formatNumber(price),
            })
        }
        if (price.length <=4){
            this.setState({
                validPrice: false,
                invalidPrice: false,
                price:'',
                format:price,
            })
        }

        if(!price.match(regex)){
            this.setState({
                validPrice:false,
                invalidPrice:true,
                messagePrice:'* Please Enter Number',
                format:(price)
            })
        }

    }

    formatNumber (number){
        let formatNumber=(Number(number)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        let splitArray=formatNumber.split('.');
        if(splitArray.length>1){
            formatNumber=splitArray[0];
        }
        return(formatNumber);
    }

    handleChangeImage =(event)=>{
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

    submitProduct (event){


        if (this.state.validBrandName !== false&& this.state.validProductName!==false
            &&this.state.validPrice!==false&&this.state.validImage!==false
                    &&this.state.validGenderName!==false){
            const product ={
                brandName:this.state.brandName,
                productName:this.state.productName,
                originalPrice:this.state.price,
                price:this.state.price,
                image:this.state.image,
                gender:this.state.genderName,
            }
            var productListAll = [];
            productListAll = productList;
            productListAll.unshift(product)
            localStorage.setItem('localProduct',JSON.stringify(productListAll));
            this.setState(this.initialState);
            this.setState(this.validState);
            this.setState(this.messageState)
            let options = {};
            options = {
                place: 'tr',
                message: (
                    <div>
                        Add <b className='text-dark'>Add New Product</b> Success
                    </div>
                ),
                type: 'primary',
                icon: "now-ui-icons ui-1_bell-53",
                autoDismiss: 3,
            };

            this.refs.notificationAlert.notificationAlert(options);

        }else {
            if (this.state.validBrandName===false){
                this.setState({
                    messageBrandName:'* Required to select',
                    color:'text-danger'
                });
            }

            if (this.state.validGenderName===false){
                this.setState({
                    messageGenderName:'* Required to select',
                    color:'text-danger'
                });
            }

            if (this.state.validProductName===false){
                this.setState({
                    messageProductName:'* Required to enter',
                    invalidProductName:true,

                })

            }

            if (this.state.validPrice===false){
                this.setState({
                    messagePrice:'* Required to enter',
                    invalidPrice:true,
                })
            }

            if (this.state.validImage===false){
                this.setState({
                    messageImage:'* Please select files',
                    invalidImage:true,
                })

            }
        }

        event.preventDefault();

    }

    updateProduct(event){
        event.preventDefault()
        if (this.state.validBrandName !== false&& this.state.validProductName!==false
            &&this.state.validPrice!==false&&this.state.validImage!==false
                &&this.state.validGenderName!==false){
            const product ={
                brandName:this.state.brandName,
                productName:this.state.productName,
                originalPrice:this.state.price,
                price:this.state.price,
                image:this.state.image,
                gender:this.state.genderName,
            }

            var productListAll = [];
            productListAll = productList;
            productListAll[this.props.match.params.id]=product;
            localStorage.setItem('localProduct',JSON.stringify(productListAll));
            this.setState(this.initialState);
            this.setState(this.validState);
            this.setState(this.messageState);
            var options = {};
            options = {
                place: 'tr',
                message: (
                    <div>
                         <b className='text-dark'> Update Product </b> Success
                    </div>
                ),
                type: 'primary',
                icon: "now-ui-icons ui-1_bell-53",
                autoDismiss: 3,
            };
            this.refs.notificationAlert.notificationAlert(options);
            setTimeout( () => this.productListAll() ,3000);
        }

        if (this.state.validProductName===false||this.state.validProductName.length <2){

            this.setState({
                messageProductName:'* Required to enter',
                invalidProductName:true,

            })

        }

        if (this.state.validBrandName === false){

            this.setState({
                messageBrandName:'* Required to select',
                color:'text-danger'
            })

        }

        if (this.state.validGenderName === false){

            this.setState({
                messageGenderName:'* Required to select',
                color:'text-danger'
            })

        }

        if (this.state.validPrice===false){
            this.setState({
                messagePrice:'* Required to enter',
                invalidPrice:true,
            })
        }

        if (this.state.validImage===false){
            this.setState({
                messageImage:'* Please select files',
                invalidImage:true,
            })

        }
    }
    productListAll = () => {
        this.props.history.push("/admin/productlist")
    };

    render() {
        const {validBrandName,invalidBrandName,messageBrandName, brandName} = this.state;
        const {messageProductName,invalidProductName,validProductName,productName} =this.state;
        const {validPrice,invalidPrice,messagePrice} = this.state;
        const {messageImage,invalidImage ,validImage,image,color} =this.state
        const {validGenderName,invalidGenderName,messageGenderName,genderName} =this.state;
        const {updateProduct} =this.state;
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;

        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt='' />);
        }
        return (
            <>
                <PanelHeader size="sm" />
                <div className="content">
                    <NotificationAlert ref="notificationAlert"/>
                    <Row>
                        <Col className={$imagePreview ? "col-md-7" :"col-md-12"}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title">{updateProduct ? 'UPDATE PRODUCT':'ADD PRODUCT'}</h5>
                                </CardHeader>
                                <hr/>
                                <CardBody>
                                    <form onSubmit={this.state.updateProduct ? this.updateProduct : this.submitProduct}>
                                        <Row>
                                            <Col md="12" className='my-1'>
                                                <FormGroup>
                                                    <label>Brand Name</label>
                                                    <Input
                                                        type="select"
                                                        value={brandName} name='brandName'
                                                        onChange={this.handleChangeBrandName}
                                                        valid={validBrandName} invalid={invalidBrandName}>
                                                        <option >SELECT BRAND NAME</option>
                                                        {brandNameList.map((number) =>{
                                                            return(<option value={number} key={number.toString()}>
                                                            {number}
                                                            </option>)
                                                            })}
                                                    </Input>
                                                    <FormText className={color ? 'text-danger' :'text-success'}>{messageBrandName}</FormText>

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col  md="12" className='my-1'>
                                                <FormGroup>
                                                    <label>Product Name</label>
                                                    <Input
                                                        value={productName} name='productName'
                                                        placeholder="Product Name"
                                                        valid={validProductName} invalid={invalidProductName}
                                                        onChange={this.handleChangeProductName}
                                                        type="text"
                                                    >
                                                        <option></option>
                                                    </Input>
                                                    <FormFeedback valid>{messageProductName}</FormFeedback>
                                                    <FormFeedback >{messageProductName}</FormFeedback>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col  md="12" className='my-1'>
                                                <FormGroup >
                                                    <label>Price</label>
                                                        <Input
                                                            value={this.state.format} name='format'
                                                            valid={validPrice}
                                                            invalid={invalidPrice}
                                                            placeholder="Price"
                                                            onChange={this.handleChangePrice}
                                                        />
                                                    <FormFeedback valid>{messagePrice}</FormFeedback>
                                                    <FormFeedback >{messagePrice}</FormFeedback>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12" className='my-1'>
                                                <FormGroup>
                                                    <label>Gender</label>
                                                    <Input
                                                        type="select"
                                                        value={genderName} name='genderName'
                                                        onChange={this.handleChangeGenderName}
                                                        valid={validGenderName} invalid={invalidGenderName}>
                                                        <option >SELECT GENDER NAME</option>
                                                        {gender.map((number) =>{
                                                            return(<option value={number} key={number.toString()}>
                                                                {number}
                                                            </option>)
                                                        })}
                                                    </Input>
                                                    <FormText className={color ? 'text-danger' :'text-success'}>{messageGenderName}</FormText>

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='12' className='my-1'>
                                                <FormGroup>
                                                    <Label >Image</Label>
                                                </FormGroup>
                                                <Input type="file" id="imageFile"
                                                       defaultValue={image} name='image'
                                                       valid={validImage}
                                                       invalid={invalidImage}
                                                       onChange={this.handleChangeImage} />
                                                <FormFeedback valid>{messageImage}</FormFeedback>
                                                <FormFeedback >{messageImage}</FormFeedback>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row>
                                            <Col md='12'>
                                                <p style={{"textAlign": $imagePreview ? "center":"right"}}>
                                                    <Button color='primary' type='submit'>{updateProduct?'UPDATE' :'SAVE'}</Button>
                                                    <Button color='primary' style={{'display':updateProduct?"inline": "none"}}
                                                        onClick={this.productListAll}
                                                           >CANCEL</Button>
                                                </p>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col  style={{"display":$imagePreview ? '' :'none'}} md='5'>
                            <Card className="card-user">
                                <CardBody>
                                    {$imagePreview}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default AddProduct;
