import nikeAirMax1 from 'static/img/imgProduct/01-air-max-1-shoe.jpg'
import nikeAirZoomTempo from 'static/img/imgProduct/02-air-zoom-tempo-next-running-shoe.jpg'
import nikeAirForce1 from 'static/img/imgProduct/03-air-force-1-07-craft-shoe.jpg'
import nikeAirVaporMax from 'static/img/imgProduct/04-air-vapormax-2020-flyknit-shoe.jpg'
import nikeZoomFly3 from 'static/img/imgProduct/05-zoom-fly-3-running-shoe.jpg'
import nikeMetcon6 from 'static/img/imgProduct/06-metcon-6-training-shoe.jpg'
import nikeLebron18 from 'static/img/imgProduct/07-lebron-18-basketball-shoe.jpg'
import nikeSBZoomStefanJanoskiRM from 'static/img/imgProduct/08-sb-zoom-stefan-janoski-rm-skate-shoe.jpg'
import adidasSuperstar from 'static/img/imgProduct/09-adidas-superstar-shoes.jpg'
import adidasUltraBoost20 from 'static/img/imgProduct/10-custom-pg-5-by-you.jpg'
import adidasUltra4D5 from 'static/img/imgProduct/11-adidas-ultra-4d-5-shoes.jpg'
import adidas4DRun from 'static/img/imgProduct/12-4d-run-1.0-shoes.jpg'
import HunterXFestiveWashedGreen from 'static/img/imgProduct/13-Bitis-Hunter-X-Festive -Washed-Green.jpg'
import HunterNamelessEdition from 'static/img/imgProduct/14-Bitis-Hunter-Nameless-Edition.jpg'
import HunterXFestiveSpicePumpkin from 'static/img/imgProduct/15-Hunter-X-Festive-Spice-Pumpkin.jpg'
import HunterStreetFestiveLowCutDukeBlue from 'static/img/imgProduct/16-BitisHunter-Street-Festive -Low-Cut-Duke-Blue.jpg'

var productList = [];

const thead = ["Brand Name", "Product Name" ,"Original Price","Price","Image"];
var localProduct = localStorage.getItem("localProduct");






if (localProduct!=null){
    productList = JSON.parse(localProduct);

};

if (localProduct==null){
    productList=[
        {
            brandName: "Biti's",
            productName: "Hunter Street Festive",
            originalPrice: "1499000",
            price: "1499000",
            image: HunterStreetFestiveLowCutDukeBlue,
            gender:"Men's Shoes",
        },
        {
            brandName:"Nike",
            productName: "Nike Air Max 1",
            originalPrice: "4109000",
            price: "4109000",
            image: nikeAirMax1,
            gender:"Men's Shoes",
        },
        {
            brandName: "Biti's",
            productName: "Hunter X Festive Spice Pumpkin",
            originalPrice: "1499000",
            price: "1499000",
            image: HunterXFestiveSpicePumpkin,
            gender:"Men's Shoes",
        },
        {
            brandName: "Nike",
            productName: "Nike Air Zoom Tempo NEXT %",
            originalPrice: "4109000",
            price: "4109000",
            image: nikeAirZoomTempo,
            gender:'Woman Shoes',
        },
        {
            brandName: "Nike",
            productName: "Nike Air Force 1 '07 Craft",
            originalPrice: "3509000",
            price: "3509000",
            image: nikeAirForce1,
            gender:'Woman Shoes',
        },
        {
            brandName: "Adidas",
            productName: "Adidas UltraBoost 20",
            originalPrice: "5000000",
            price: "5000000",
            image: adidasUltraBoost20,
            gender:'Woman Shoes',
        },
        {
            brandName: "Adidas",
            productName: "Adidas  Ultra 4D 5",
            originalPrice: "6000000",
            price: "6000000",
            image: adidasUltra4D5,
            gender:'Woman Shoes',
        },
        {
            brandName: "Nike",
            productName: "Nike Air VaporMax 2020 Flyknit",
            originalPrice: "6459000",
            price: "6459000",
            image: nikeAirVaporMax,
            gender:'Woman Shoes',
        },
        {
            brandName: "Nike",
            productName: "Nike Zoom Fly 3",
            originalPrice: "4699000",
            price: "4699000",
            image: nikeZoomFly3,
            gender:'Woman Shoes',
        },
        {
            brandName: "Nike",
            productName: "Nike Metcon 6",
            originalPrice: "3829000",
            price: "3829000",
            image: nikeMetcon6,
            gender:"Kid's Girls Shoes",
        },
        {
            brandName: "Nike",
            productName: "LeBron 18",
            originalPrice: "3509000",
            price: "3509000",
            image: nikeLebron18,
            gender:"Kid's Girls Shoes",
        },
        {
            brandName: "Nike",
            productName: "Nike SB Zoom Stefan Janoski RM",
            originalPrice: "2649000",
            price: "2649000",
            image: nikeSBZoomStefanJanoskiRM,
            gender:"Kid's Girls Shoes",
        },
        {
            brandName: "Adidas",
            productName: "Adidas Superstar",
            originalPrice: "2200000",
            price: "2400000",
            image: adidasSuperstar,
            gender:"Kid's Girls Shoes",
        },

        {
            brandName: "Adidas",
            productName: "Adidas 4D Run 1.0",
            originalPrice: "5200000",
            price: "5500000",
            image: adidas4DRun,
            gender:"Kid's Boys Shoes",
        },
        {
            brandName: "Biti's",
            productName: "Hunter X Festive Washed-Green",
            originalPrice: "800000",
            price: "899000",
            image: HunterXFestiveWashedGreen,
            gender:"Kid's Boys Shoes",
        },
        {
            brandName: "Biti's",
            productName: "Biti's Hunter Nameless Edition",
            originalPrice: "1900000",
            price: "2000000",
            image: HunterNamelessEdition,
            gender:"Kid's Boys Shoes",
        },
        ];
    localStorage.setItem('localProduct',JSON.stringify(productList));
}

export  {productList,thead,};