import {account} from "variables/data";

var userlogin = [];
var userToken =null;

const tokenString = localStorage.getItem('tokenLogin');
const token = JSON.parse(tokenString);
account.filter((data)=>{
      if (token===data.token&&data.role==='admin'){
           userToken = data.token;
           userlogin=data;
        }
            return userToken;
        })

export {userToken,userlogin}


