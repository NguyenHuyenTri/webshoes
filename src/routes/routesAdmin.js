import Dashboard from "views/Admin/Dashboard.js";
import ProductList from "views/Admin/Product/ProductList.js";
import Maps from "views/Admin/BrandName/BrandName.js";
import PageHome from 'views/Admin/Page/Home/PageHome'
import PageMen from "../views/Admin/Page/Men/PageMen";

import "static/assets/css/demo.css";
import "bootstrap/dist/css/bootstrap.css";
import "static/assets/scss/now-ui-dashboard.scss?v1.4.0";

import AddProduct from "views/Admin/Product/AddProduct";
import PageWoman from "../views/Admin/Page/Woman/PageWoman";
import PageKid from "../views/Admin/Page/Kid/PageKid";
import ListContact from "../views/Admin/Contact/ListContact";
import ListOrder from "../views/Admin/Order/ListOrder";



var dashRoutes = [{
        path: "/dashboard",
        name: "Dashboard",
        icon: "design_app",
        component: Dashboard,
        layout: "/admin",
        display: true
    },
    // product list
    {
        path: "/productlist",
        name: "Product List",
        icon: "design_bullet-list-67",
        component: ProductList,
        layout: "/admin",
        display: true
    },
    // add product
    {
        path: "/addproduct",
        name: "New Product",
        icon: "ui-1_simple-add",
        component: AddProduct,
        layout: "/admin",
        display: true,
    },
    {
        path: "/order",
        name: "Orders",
        icon: "education_paper",
        component: ListOrder,
        layout: "/admin",
        display: true,
    },
    {
        path: "/brandname",
        name: "Brand & Gender List",
        icon: "objects_planet",
        component: Maps,
        layout: "/admin",
        display: true,
        nav: false,
    },
    {
        path: "/pagehome",
        name: "Page Home",
        icon: "education_paper",
        component: PageHome,
        layout: "/admin",
        display: true,
    },
    {
        path: "/pagemen",
        name: "Page Men",
        icon: "education_paper",
        component: PageMen,
        layout: "/admin",
        display: true,
    },
    {
        path: "/pagewoman",
        name: "Page Woman",
        icon: "education_paper",
        component: PageWoman,
        layout: "/admin",
        display: true,
    },
    {
        path: "/pagekid",
        name: "Page Kid",
        icon: "education_paper",
        component: PageKid,
        layout: "/admin",
        display: true,
    },
    {
        path: "/update/:id",
        name: "Update",
        icon: "design-2_ruler-pencil",
        component: AddProduct,
        layout: "/admin",
        display: false,
        nav: false,
    },
    {
        path: "/Contact/ListContact",
        name: "Contact",
        icon: "education_paper",
        component: ListContact,
        layout: "/admin",
        display: true,
    },

];
export default dashRoutes;