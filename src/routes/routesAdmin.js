import Dashboard from "views/Admin/Dashboard.js";
import ProductList from "views/Admin/Product/ProductList.js";
import Maps from "views/Admin/BrandName/BrandName.js";
import PageHome from 'views/Admin/Page/Home/PageHome'
import PageMen from "../views/Admin/Page/Men/PageMen";

import "static/assets/css/demo.css";
import "bootstrap/dist/css/bootstrap.css";
import "static/assets/scss/now-ui-dashboard.scss?v1.4.0";

// import Upgrade from "views/Upgrade.js";
import AddProduct from "views/Admin/Product/AddProduct";
import PageWoman from "../views/Admin/Page/Woman/PageWoman";
import PageKid from "../views/Admin/Page/Kid/PageKid";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
    display:true
  },
    // product list
  {
    path: "/productlist",
    name: "Product List",
    icon: "design_bullet-list-67",
    component: ProductList,
    layout: "/admin",
    display:true
  },
    // add product
  {
    path: "/addproduct",
    name: "New Product",
    icon: "ui-1_simple-add",
    component: AddProduct,
    layout: "/admin",
    display:true,
    nav:false
  },
    // brand and gender
  {
    path: "/brandname",
    name: "Brand & Gender List",
    icon: "objects_planet",
    component: Maps,
    layout: "/admin",
    display:true,
    nav:false,
  },
  {
    path: "/pagehome",
    name: "Page Home",
    icon: "education_paper",
    component: PageHome,
    layout: "/admin",
    display:true,
  },
  {
    path: "/pagemen",
    name: "Page Men",
    icon: "education_paper",
    component: PageMen,
    layout: "/admin",
    display:true,
  },
  {
    path: "/pagewoman",
    name: "Page Woman",
    icon: "education_paper",
    component: PageWoman,
    layout: "/admin",
    display:true,
  },
  {
    path: "/pagekid",
    name: "Page Kid",
    icon: "education_paper",
    component: PageKid,
    layout: "/admin",
    display:true,
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/admin",
  //   display:true,
  //   nav:false,
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin",
  //   display:true,
  //   nav:false,
  // },
  // {
  //   path: "/extended-tables",
  //   name: "Table List",
  //   icon: "files_paper",
  //   component: TableList,
  //   layout: "/admin",
  //   display:true,
  //   nav:false,
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography,
  //   layout: "/admin",
  //   display:true,
  //   nav:false,
  // },
  {
    path: "/update/:id",
    name: "Update",
    icon: "design-2_ruler-pencil",
    component: AddProduct,
    layout: "/admin",
    display:false,
    nav:false,
  },
];
export default dashRoutes;
