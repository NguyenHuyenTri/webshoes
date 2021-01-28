// import React, { useState} from "react";
// import {Col, FormFeedback, FormGroup, Input, Label, Row} from "reactstrap";
// let imageLink ='';
//
// export default function (props) {
//
//     console.log(props.upload)
//
//     const [image,setImage]=useState(null)
//     const [file,setFile]=useState()
//     const [validImage,setValidImage]=useState(false);
//     const [invalidImage,setInvalidImage]=useState(false);
//     const [messageImage,setMessageImage]=useState('');
//
//     const handleChangeImage = (event) =>{
//         event.preventDefault();
//         if (event.target.value){
//             let reader = new FileReader();
//             let file = event.target.files[0];
//             let fileType = event.target.files[0].type;
//
//             switch(fileType) {
//                 case 'image/png':
//                 case 'image/gif':
//                 case 'image/jpeg':
//                 case 'image/pjpeg':
//                     reader.onloadend = () =>{
//                         setFile(file)
//                         setValidImage(true)
//                         setInvalidImage(false)
//                         setMessageImage('Acceptable image file!')
//                         setImage(reader.result)
//                     }
//                     break;
//                 default:
//                     setValidImage(false)
//                     setInvalidImage(true)
//                     setMessageImage('Unsupported File')
//                     setImage('')
//             }
//             reader.readAsDataURL(file);
//         }else{
//             setValidImage(false)
//             setInvalidImage(true)
//             setMessageImage('')
//         }
//     }
//
//     return(
//         <>
//             {file!==null?
//                 <>
//                     <img src={image} alt=''/>
//
//                     </>
//                 :null
//             }
//             <Row>
//                 <Col md='12' className='my-1'>
//                     <FormGroup>
//                         <Label >Image</Label>
//                     </FormGroup>
//                     <Input type="file" id="imageFile"
//                            defaultValue={image} name='image' id='image'
//                            valid={validImage}
//                            invalid={invalidImage}
//                            onChange={handleChangeImage} />
//                     <FormFeedback valid>{messageImage}</FormFeedback>
//                     <FormFeedback >{messageImage}</FormFeedback>
//                 </Col>
//             </Row>
//         </>
//     )
//
// }
// export {imageLink}