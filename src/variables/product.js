import {link} from "components/image/image";
import {src} from 'components/image/imageproduct'
let productList = [];
const thead = ["Brand Name", "Product Name" ,"Original Price","Price","Image"];
let localProduct = localStorage.getItem("localProduct");

if (localProduct!=null){
    productList = JSON.parse(localProduct);
};

if (localProduct==null){
    productList=[
        //1
        {
            brandName: "Biti's",
            productName: "Hunter X Festive Aurora",
            originalPrice: "929000",
            price: "929000",
            image: link['bitis-festive-aurora.jpg'],
            gender:"Woman Shoes",
            dataImage:[
                src['01-bitis-hunter-aurora-1.jpg'],
                src['01-bitis-hunter-aurora-2.jpg'],
                src['01-bitis-hunter-aurora-3.jpg'],
                src['01-bitis-hunter-aurora-4.jpg'],
            ]
        },
        {
            brandName: "Nike",
            productName: "Nike Court Air Zoom",
            originalPrice: "4409000",
            price: "3499000",
            image: link['nike-court-air-zoom.jpg'],
            gender:"Kid's Boys Shoes",
            dataImage:[
                src['09-nike-counrt-air-zoom-1.jpg'],
                src['09-nike-counrt-air-zoom-2.jpg'],
                src['09-nike-counrt-air-zoom-3.jpg'],
                src['09-nike-counrt-air-zoom-4.jpg'],
            ]
        },
        {
            brandName: "Adidas",
            productName: "Adidas Downshifter",
            originalPrice: "2200000",
            price: "2400000",
            image: link['adidas-downshifter.jpg'],
            gender:"Kid's Girls Shoes",
            dataImage:[
                src['17-adidas-downshifter-1.jpg'],
                src['17-adidas-downshifter-2.jpg'],
                src['17-adidas-downshifter-3.jpg'],
                src['17-adidas-downshifter-4.jpg'],
            ]
        },
        //2
        {
            brandName: "Biti's",
            productName: "Hunter X Festive Electric Love",
            originalPrice: "929000",
            price: "929000",
            image: link['bitis-festive-electric-love.jpg'],
            gender:"Woman Shoes",
            dataImage:[
                src['02-bitis-hunter-aurora-1.jpg'],
                src['02-bitis-hunter-aurora-2.jpg'],
                src['02-bitis-hunter-aurora-3.jpg'],
                src['02-bitis-hunter-aurora-4.jpg'],
            ]
        },
        {
            brandName:"Nike",
            productName: "Nike Court Air Max ",
            originalPrice: "4109000",
            price: "4109000",
            image: link['nike-court-air-max.jpg'],
            gender:"Kid's Boys Shoes",
            dataImage:[
                src['10-nike-court-air-max-1.jpg'],
                src['10-nike-court-air-max-2jpg'],
                src['10-nike-court-air-max-3.jpg'],
                src['10-nike-court-air-max-4.jpg'],
            ]
        },
        {
            brandName: "Adidas",
            productName: "Adidas Revolution 5",
            originalPrice: "2200000",
            price: "2400000",
            image: link['adidas-revolution-5-flyease.jpg'],
            gender:"Kid's Girls Shoes",
            dataImage:[
                src['19-adidas-revolution-5-flyease-1.jpg'],
                src['19-adidas-revolution-5-flyease-2.jpg'],
                src['19-adidas-revolution-5-flyease-3.jpg'],
            ]
        },
        //3
        {
            brandName: "Biti's",
            productName: "Hunter Core Festive Breezer",
            originalPrice: "800000",
            price: "899000",
            image: link['bitis-festive-breezer.jpg'],
            gender:"Kid's Boys Shoes",
            dataImage:[
                src['03-bitis-hunter-festive-beezer-1.jpg'],
                src['03-bitis-hunter-festive-beezer-2.jpg'],
                src['03-bitis-hunter-festive-beezer-3.jpg'],
                src['03-bitis-hunter-festive-beezer-4.jpg'],
            ]
        },
        {
            brandName: "Nike",
            productName: "Nike Court Lite ",
            originalPrice: "4109000",
            price: "4109000",
            image: link['nike-court-lite.jpg'],
            gender:'Woman Shoes',
            dataImage:[
                src['11-nike-court-lite-1.jpg'],
                src['11-nike-court-lite-2.jpg'],
                src['11-nike-court-lite-3.jpg'],
                src['11-nike-court-lite-4.jpg'],
            ]
        },
        {
            brandName: "Adidas",
            productName: "Adidas Wio 7",
            originalPrice: "2929000",
            price: "2929000",
            image: link['adidas-wio-7.jpg'],
            gender:"Kid's Boys Shoes",
            dataImage:[
                src['18-adidas-wio-7-1.jpg'],
                src['18-adidas-wio-7-2.jpg'],
                src['18-adidas-wio-7-3.jpg'],
                src['18-adidas-wio-7-4.jpg'],
            ]
        },
        //4
        {
            brandName: "Biti's",
            productName: "Hunter Core Festive Snowflake",
            originalPrice: "1900000",
            price: "2000000",
            image: link['bitis-festive-snowflake.jpg'],
            gender:"Kid's Boys Shoes",
            dataImage:[
                src['04-bitis-festive-snowflake-1.jpg'],
                src['04-bitis-festive-snowflake-2.jpg'],
                src['04-bitis-festive-snowflake-3.jpg'],
                src['04-bitis-festive-snowflake-4.jpg'],
            ]
        },
        {
            brandName: "Nike",
            productName: "Nike Air Force",
            originalPrice: "3509000",
            price: "3509000",
            image: link['nike-air-force.jpg'],
            gender:'Woman Shoes',
            dataImage:[
                src['12-nike-air-force-1.jpg'],
                src['12-nike-air-force-1.jpg'],
                src['12-nike-air-force-1.jpg'],
                src['12-nike-air-force-1.jpg'],
            ]
        },
        {
            brandName: "Adidas",
            productName: "Adidas Wio Running",
            originalPrice: "2929000",
            price: "2929000",
            image: link['adidas-wio-running.jpg'],
            gender:"Kid's Boys Shoes",
            dataImage:[
                src['22-adidas-wio-running-1.jpg'],
                src['22-adidas-wio-running-2.jpg'],
                src['22-adidas-wio-running-3.jpg'],
                src['22-adidas-wio-running-4.jpg'],
            ]
        },
        //5
        {
            brandName: "Biti's",
            productName: "Hunter Core Festive Washed",
            originalPrice: "800000",
            price: "899000",
            image: link['bitis-washed.jpg'],
            gender:"Kid's Girls Shoes",
            dataImage:[
                src['05-bitis-washed-1.jpg'],
                src['05-bitis-washed-2.jpg'],
                src['05-bitis-washed-3.jpg'],
                src['05-bitis-washed-4.jpg'],
            ]
        },
        {
            brandName: "Nike",
            productName: "Nike Air VaporMax",
            originalPrice: "5000000",
            price: "5000000",
            image: link['nike-air-vapormax.jpg'],
            gender:"Men's Shoes",
            dataImage:[
                src['13-air-vapormax.jpg'],
                src['13-nike-air-vapormax-2.jpg.jpg'],
                src['13-nike-air-vapormax-3.jpg.jpg'],
                src['13-nike-air-vapormax-4.jpg.jpg'],
            ]
        },
        {
            brandName: "Adidas",
            productName: "Adidas Zoom Pegasus",
            originalPrice: "2929000",
            price: "2929000",
            image: link['adidas-zoom-pegasus.jpg'],
            gender:"Women Shoes",
            dataImage:[
                src['20-air-zoom-pegasus-1.jpg'],
                src['20-air-zoom-pegasus-2.jpg'],
                src['20-air-zoom-pegasus--3.jpg'],
            ]
        },
        //6
        {
            brandName: "Biti's",
            productName: "Hunter Nameless Edition",
            originalPrice: "1900000",
            price: "2000000",
            image: link['bitis-edition.jpg'],
            gender:"Kid's Girls Shoes",
            dataImage:[
                src['06-bitis-edition-1.jpg'],
                src['06-bitis-edition-2.jpg'],
                src['06-bitis-edition-3.jpg'],
                src['06-bitis-edition-4.jpg'],
            ]
        },
        {
            brandName: "Nike",
            productName: "Nike SB Zoom Blazer",
            originalPrice: "6000000",
            price: "6000000",
            image:link['nike-sb-zoom-blazer.jpg'] ,
            gender:"Men's Shoes",
            dataImage:[
                src['14-nike-sb-zoom-blazer-1.jpg'],
                src['14-nike-sb-zoom-blazer-2.jpg'],
                src['14-nike-sb-zoom-blazer-3.jpg'],
                src['14-nike-sb-zoom-blazer-4.jpg'],
            ]
        },
        //7
        {
            brandName: "Biti's",
            productName: "Hunter X Grey Festive Washed",
            originalPrice: "929000",
            price: "929000",
            image: link['bitis-grey-festive-washed.jpg'],
            gender:"Men's Shoes",
            dataImage:[
                src['07-bitis-grey-festive-washed-1.jpg'],
                src['07-bitis-grey-festive-washed-2.jpg'],
                src['07-bitis-grey-festive-washed-3.jpg'],
                src['07-bitis-grey-festive-washed-4.jpg'],
            ]
        },
        {
            brandName: "Nike",
            productName: "Nike Kill Short",
            originalPrice: "6459000",
            price: "6459000",
            image: link['nike-killshot.jpg'],
            gender:"Kid's Girls Shoes",
            dataImage:[
                src['15-nike-killshot-1.jpg'],
                src['15-nike-killshot-2.jpg'],
                src['15-nike-killshot-3.jpg'],
                src['15-nike-killshot-4.jpg'],
            ]
        },
        //8
        {
            brandName: "Biti's",
            productName: "Hunter X Festive Spice Pumpkin",
            originalPrice: "929000",
            price: "929000",
            image: link['bitis-festive-spice-pumpkin.jpg'],
            gender:"Men's Shoes",
            dataImage:[
                src['08-bitis-festive-spice-pumpkin-1.jpg'],
                src['08-bitis-festive-spice-pumpkin-2.jpg'],
                src['08-bitis-festive-spice-pumpkin-3.jpg'],
                src['08-bitis-festive-spice-pumpkin-4.jpg'],
            ]
        },
        {
            brandName: "Nike",
            productName: "Nike Lebron 18 ",
            originalPrice: "4699000",
            price: "4699000",
            image: link['nike-lebron-18.jpg'],
            gender:"Kid's Girls Shoes",
            dataImage:[
                src['16-lebron-18-1.jpg'],
                src['16-lebron-18-2.jpg'],
                src['16-lebron-18-3.jpg'],
                src['16-lebron-18-4.jpg'],
            ]
        },
        {
            brandName: "Adidas",
            productName: "Adidas Zoom Running",
            originalPrice: "2929000",
            price: "2929000",
            image: link['adidas-zoom-fly-running.jpg'],
            gender:"Men's Shoes",
            dataImage:[
                src['21-adidas-zoom-fly-running-1.jpg'],
                src['21-adidas-zoom-fly-running-2.jpg'],
            ]
        },
        ];
    localStorage.setItem('localProduct',JSON.stringify(productList));
}

export  {productList,thead,};