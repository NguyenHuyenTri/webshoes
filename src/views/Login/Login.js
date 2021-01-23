import React, {useState} from "react";
import {account} from "variables/data";
import Form from "reactstrap/es/Form";
import Header from "components/Website/Header/Header";
import Footer from "components/Website/Footer/Footer";
import {userToken} from "views/Login/useToken";
import {Redirect} from "react-router";
import 'static/website/active.css'

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
    const [message,setMessage] =useState('')
    const [animated,setAnimated] =useState(false)
    const [load,setLoad]=useState(false)
    const handleSubmit = async e => {
        setLoad(true)
        e.preventDefault();
        if (username.length && password.length >=5){
            const token = await loginUser({
                username,
                password
            });
            if (token){
                setTimeout(()=>window.location.reload(),1500)
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

    if (userToken!==null){
      return  <Redirect to={'/admin/dashboard'}/>
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
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
