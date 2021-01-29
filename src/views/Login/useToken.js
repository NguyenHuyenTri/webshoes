import {account} from "variables/data";

let userlogin = [];
let userToken =null;
let userMember =[]
const tokenString = localStorage.getItem('tokenLogin');
const token = JSON.parse(tokenString);
account.filter((data)=>{
      if (token===data.token&&data.role==='admin'){
           userToken = data.token;
           userlogin=data;
        }
            return userToken;
        })
account.filter((data)=>{
    if (token===data.token&&data.role==='user'){
        userMember=data;
        userToken = data.token;
    }
    return userMember;
})
export {userToken,userlogin,userMember}





