
let gender =[];
let brandNameList = [];
let localBrandName = localStorage.getItem("localBrandName");
let localGender = localStorage.getItem("localGender");
if (localBrandName!=null){
    brandNameList = JSON.parse(localBrandName);
}else{
    brandNameList=["Nike","Adidas","Biti's"]
    localStorage.setItem('localBrandName',JSON.stringify(brandNameList));
}
if (localGender!=null){
    gender = JSON.parse(localGender);
}else{
    gender = ["Men's Shoes","Woman Shoes","Girls Shoes","Boy Shoes"]
    localStorage.setItem('localGender',JSON.stringify(gender));
}



var account = [];

let localAccount = localStorage.getItem('localAccount')

if (localAccount!=null){
    account=JSON.parse(localAccount)
}else {
    account = [
        { username:'admin@gmail.com', password:'123456',name:'Admin LocFuHo',role:'admin',token:''},
        { username:'tri@gmail.com', password:'123456',name:'Huyền Trí',role:'admin',token:''},
        { username:'member@gmail.com', password:'123456',name:'Member LocFuho',role:'user',token:''},
        { username:'trine', password:'trine',name:'Member LocFuho',role:'user',token:''},
        { username:'123', password:'123',name:'Member LocFuho',role:'user',token:''},
    ]
    localStorage.setItem('localAccount',JSON.stringify(account))
}

export {gender,brandNameList,account}