import Home from "views/Website/Home/Home";
import Men from "views/Website/Men/Men";
import Woman from "views/Website/Woman/Woman";
import Kid from "views/Website/Kid/Kid";

import Login from 'views/Login/Login';
import Product from "views/Website/Product/Product";
import AllProducts from "views/Website/Product/AllProducts";
import Bag from 'views/Website/Bag/Bag'
import Pay from 'views/Website/Bag/Pay'
import Contact from 'views/Website/Contact/Contact'

var dashRoutes = [
    //home
    {
        layout: '/locfuho',
        path: "/ ",
        component: Home,
    },
    // page men , woman / kid product
    {
        layout: '/locfuho',
        path: "/:value/product",
        component: AllProducts,
    },
    // page product
    {
        layout: '/locfuho',
        path: "/product/:value",
        component: Product,
    },
    //page men
    {
        layout: '/locfuho',
        path: "/men",
        component: Men,
    },
    //page woman
    {
        layout: '/locfuho',
        path: "/woman",
        component: Woman,
    },
    //page kid
    {
        layout: '/locfuho',
        path: "/kid",
        component: Kid,
    },
    //page login
    {
        layout: '/locfuho',
        path: "/login",
        component: Login,
    },
    //page bag
    {
        layout: '/locfuho',
        path: "/bag",
        component: Bag,
    },
    //page contact
    {
        layout: '/locfuho',
        path: "/contact",
        component: Contact,
    },
    //page pay
    {
        layout: '/locfuho',
        path: "/pay",
        component: Pay,

    }
]

export default dashRoutes;