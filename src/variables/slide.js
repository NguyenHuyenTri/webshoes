import img1 from "static/img/slide/slide_01.jpg";
import img2 from "static/img/slide/slide_03.jpg";
import img3 from "static/img/slide/slide_04.jpg";
import img4 from "static/img/slide/slide_05.jpg";
import {productList} from 'variables/product'
import {SearchProduct} from "../components/Search";



let dataSlideHome = []
let dataScrollHome=[]
let dataScrollMen=[]
let dataScrollKid=[]
let dataScrollWoman=[]

let localSlideHome = localStorage.getItem('localSlideHome');
let localScrollHome = localStorage.getItem('localScrollHome');
let localScrollMen = localStorage.getItem('localScrollMen');
let localScrollKid = localStorage.getItem('localScrollKid');
let localScrollWoman = localStorage.getItem('localScrollWoman');

if (localSlideHome!==null){
    dataSlideHome= JSON.parse(localSlideHome);
}else {
    dataSlideHome = [
        {
            brandName:'Nike',
            productName:'Nike Air Zoom Tempo NEXT ',
            title:'Designed to help reduce injury and keep you on the run. ',
            image:img1,
        },
        {
            brandName:'Adidas',
            productName:'Adidas UltraBoost 20',
            title:'Designed to help reduce injury and keep you on the run. ',
            image:img2,
        },
        {
            brandName:"Biti's",
            productName:'Hunter Street Festives',
            title:'Designed to help reduce injury and keep you on the run. ',
            image:img3,
        },
        {
            brandName:"Biti's",
            productName:'Hunter X Festive Washed-Green',
            title:'Designed to help reduce injury and keep you on the run. ',
            image:img4,
        },
    ];
    localStorage.setItem('localSlideHome',JSON.stringify(dataSlideHome))
}

//page home
if (localScrollHome!==null){
    dataScrollHome=JSON.parse(localScrollHome)
}else {
    dataScrollHome = productList.slice(0,5);
    localStorage.setItem('localScrollHome',JSON.stringify(dataScrollHome))
}

//page men

if (localScrollMen!==null){
    dataScrollMen=JSON.parse(localScrollMen);
}else {
    dataScrollMen= SearchProduct('men',productList,'gender').slice(0,5);
    localStorage.setItem('localScrollMen',JSON.stringify(dataScrollMen))
}

//woman

if (localScrollWoman!==null){
    dataScrollWoman=JSON.parse(localScrollWoman);
}else {
    dataScrollWoman= SearchProduct('woman',productList,'gender').slice(0,5);
    localStorage.setItem('localScrollWoman',JSON.stringify(dataScrollWoman))
}

//kid

if (localScrollKid!==null){
    dataScrollKid=JSON.parse(localScrollKid);
}else {
    dataScrollKid= SearchProduct('kid',productList,'gender').slice(0,5);
    localStorage.setItem('localScrollKid',JSON.stringify(dataScrollKid))
}


export  {dataSlideHome,dataScrollHome,dataScrollMen,dataScrollWoman,dataScrollKid}