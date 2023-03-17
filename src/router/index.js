import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView";
import Dashboard from "../views/Dashboard";
import LoginView from "../views/LoginView";
import Products from "../views/Products";
import SignupView from "../views/SignupView";
import Product1 from "../views/Product1";

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
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/products1",
    name: "products1",
    component: Product1,
   
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router;
