import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView'
import CartView from '../views/CartView';
import LoginView from '../views/LoginView';
import ShopView from '../views/ShopView';
import SignupView from "../views/SignupView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
{
  path: '/contact',
  name: 'contact',
  component: ContactView
  },

  {
    path: '/cart',
    name: 'cart',
    component: CartView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView
        },

        {
          path: '/shop',
          name: 'shop',
          component: ShopView
          },
          {
            path: '/signup',
            name: 'signup',
            component: SignupView
            },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
