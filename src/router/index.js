import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';
import Product from '@/views/Product.vue';
import About from '@/views/About.vue';
import Checkout from '@/views/Checkout.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/about',
    name: 'about',
    props: true,
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/checkout',
    name: 'checkout',
    props: true,
    component: () => import(/* webpackChunkName: "Checkout" */ '../views/Checkout.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: () => import(/* webpackChunkName: "Product" */ '../views/Product.vue'),
    meta: { transition: 'fade' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
