import React, { useState} from "react";
import {account} from "variables/data";
import Form from "reactstrap/es/Form";
import Header from "components/Website/Header/Header";
import Footer from "components/Website/Footer/Footer";
import {userToken, userMember, userlogin} from "views/Login/useToken";
import {Redirect} from "react-router";
import 'static/website/active.css';

async function loginUser({username,password}) {

    let tokenRandom
    let accountToken = [];
    accountToken =account;
    (account.filter((data,index)=>{
        if (username===data.username&&password===data.password){
            let randomToken = require('random-token');
            tokenRandom = randomToken(32);
            accountToken[index].token=tokenRandom;
            localStorage.setItem('tokenLogin', JSON.stringify(tokenRandom));
            localStorage.setItem('localAccount',JSON.stringify(accountToken))
        }
        return tokenRandom;
        }

    ))
    return tokenRandom;
}

export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName]=useState('')
    const [confirm,setComFirm]=useState('')
    const [message,setMessage] =useState('')
    const [animated,setAnimated] =useState(false)
    const [load,setLoad]=useState(false)
    const [show,setShow]=useState(false)
    const [admin,setAdmin]=useState('user')

    const handleSubmit = async e => {
        setLoad(true)
        e.preventDefault();
        if (username.length && password.length >=5){
            const token = await loginUser({
                username,
                password
            });
            if (token){
                    setLoad(false)
                   window.location.reload()
            }else {
                setTimeout(()=>{setLoad(false);
                    setMessage('Invalid email and password');
                    setAnimated(true);
                },1000)
            }
        }else {
            setTimeout(()=>{setLoad(false);
            setMessage('Invalid email and password');
            setAnimated(true);
           },1000)

        }
        setTimeout(()=>setAnimated(false),2000);
    }
    const handleChangeCheckbox = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (value===true){
            setAdmin('admin')
        }else {
            setAdmin('user')
        }
    }
    const handleRegister = (event) =>{

        if (username.length && password.length && name.length >4){
                if (password===confirm){
                    let x = false
                        account.map((props=>{
                            if (props.username===username){
                                x= true;
                            }
                            return null;
                        }))
                    if (x===true){
                        setTimeout(()=>{
                            setAnimated(true)
                            setMessage('Email already exists');
                            setAnimated(false)
                        },1000)
                    }else {

                        let y = {   username:username,
                                    password:password,
                                    name:name,
                                    role:admin,
                                    token:''};
                        account.push(y)
                        localStorage.setItem('localAccount',JSON.stringify(account))
                        setMessage('Register Success')
                        const token =  loginUser({
                            username,
                            password
                        });
                        setTimeout(()=>{
                           if (token){
                               window.location.reload()
                           }
                        },1500)
                    }
                }else {
                    setAnimated(true)
                    setTimeout(()=>
                    {setMessage('Please Password and Comfirm PassWord');
                    setAnimated(false)},1000)
                }
        }else {
            setAnimated(true)
            setMessage('Please Length Input > 4');
            setTimeout(()=> {
                    setAnimated(false);},1000)
        }
        setTimeout(()=> setMessage('Become a LOCFUHO Member!'),5000)
        event.preventDefault()
    }

        if (userToken!==null && userlogin.role==='admin' ){
            return  <Redirect to={'/admin/dashboard'}/>
        }else if (userToken!==null&&userMember.role==='user'){
            return  <Redirect to={'/locfuho/'}/>
        }

    return(
        <>
            <Header/>
            <div style={{'width':load===false?'0%':'100%','zIndex':load===false?'0':'9999'}} className="preloader d-flex align-items-center justify-content-center">
                <div style={{'display':load===false?'none':'block'}} className="sk-chase" >
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                    <div  className="sk-chase-dot"></div>
                </div>
            </div>
            <div className="mag-login-area py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            <div className="login-content bg-white p-30 box-shadow">
                                <div className="section-heading" >
                                    <h5 className={animated===true?'animated shake':''}>{message===''? 'Great to have you back!' :message}</h5>
                                </div>
                                {show===false ?
                                    <Form herf='/admin/dashboard'  >
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   placeholder="Email or User Name"
                                                   name='username'
                                                   onChange={e => setUserName(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                   name='password'
                                                   placeholder="Password"
                                                   onChange={e => setPassword(e.target.value)}/>
                                        </div>
                                        <button onClick={handleSubmit} className="btn mag-btn mt-30">Login</button>
                                    </Form> :
                                    <Form herf='/admin/dashboard'  >
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   name='name'
                                                   placeholder="Full Name"
                                                   onChange={e => setName(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   placeholder="Email Address"
                                                   name='username'
                                                   onChange={e => setUserName(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                   name='password'
                                                   placeholder="Password"
                                                   onChange={e => setPassword(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                   name='password'
                                                   placeholder="Comfirm Password"
                                                   onChange={e => setComFirm(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox"
                                                   onChange={handleChangeCheckbox}/>
                                                   <label className='ml-2'> ADMIN OR MEMBER</label>
                                        </div>

                                        <button onClick={handleRegister} className="btn mag-btn mt-30">Register</button>
                                    </Form>

                                }
                                <span className=' ml-2' style={{'marginTop':'5px'}}>{show===false ?
                                    'Do not have an account ?':'Do have an account ?'
                                }<a href='/#'
                                         className='text-danger' onClick={(e)=>{setShow(!show);e.preventDefault();
                                            setLoad(true)
                                                if (show===true){
                                                    setMessage('Great to have you back!')
                                                }else {
                                                    setMessage('Become a LOCFUHO Member!')
                                                }

                                                setTimeout(()=>setLoad(false),300)
                                         }}>
                                    {show===false? ' Sign up here':' Sign in here'}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
