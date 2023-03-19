import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView";
import Dashboard from "../views/Dashboard";
import LoginView from "../views/LoginView";
import Products from "../views/Products/Products";
import SignupView from "../views/SignupView";
import Product1 from "../views/Products/Product1";
import PageNotFound from "../views/PageNotFound";
const routes = [

  {
    path: "/",
    name: "home",
    component: HomeView,
    
  },

  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
   
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LoginView,
  },


  {
    path: "/products",
    name: "products",
    component: Products,
      
  
  },
  {
    path: "/product/:id",
    name: "Product1",
    component: Product1,

  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: PageNotFound,
   
  },

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router;
