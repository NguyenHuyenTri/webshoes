import Dashboard from "views/Admin/Dashboard.js";
import Notifications from "views/Admin/Notifications.js";
import ProductList from "views/Admin/Product/ProductList.js";
import Typography from "views/Admin/Typography.js";
import TableList from "views/Admin/TableList.js";
import Maps from "views/Admin/BrandName/BrandName.js";
import Slide from  'views/Admin/Slide/Slide'

import "static/assets/css/demo.css";
import "bootstrap/dist/css/bootstrap.css";
import "static/assets/scss/now-ui-dashboard.scss?v1.4.0";

// import Upgrade from "views/Upgrade.js";
import UserPage from "views/Admin/UserPage.js";
import AddProduct from "views/Admin/Product/AddProduct";

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
    path: "/slide",
    name: "slides",
    icon: "files_single-copy-04",
    component: Slide,
    layout: "/admin",
    display:true,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
    display:true,
    nav:false,
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
    display:true,
    nav:false,
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
    display:true,
    nav:false,
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
    display:true,
    nav:false,
  },
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
