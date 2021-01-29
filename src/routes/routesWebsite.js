import Home from "views/Website/Home/Home";
import Men from "views/Website/Men/Men";
import Woman from "views/Website/Woman/Woman";
import Kid from "views/Website/Kid/Kid";

import Login from 'views/Login/Login';
import Product from "views/Website/Product/Product";
<<<<<<< HEAD
import AllProducts from "../views/Website/Product/AllProducts";
import Bag from 'views/Website/Bag/Bag';
import Contact from 'views/Website/Contact/Contact'
=======
import AllProducts from "views/Website/Product/AllProducts";
import Bag from 'views/Website/Bag/Bag'
import Pay from "views/Website/Bag/Pay";
>>>>>>> 483ff5fafbccfdb7acaaf83cac1dd47d06efc3e4

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
<<<<<<< HEAD
    //page contact
    {
        layout: '/locfuho',
        path: "/contact",
        component: Contact,
=======
    //page pay
    {
        layout:'/locfuho',
        path: "/pay",
        component: Pay,
>>>>>>> 483ff5fafbccfdb7acaaf83cac1dd47d06efc3e4
    },
]

export default dashRoutes;