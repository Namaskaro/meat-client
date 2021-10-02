import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';
import Product from '@/views/Product.vue';
import About from '@/views/About.vue';
import Checkout from '@/views/Checkout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: { transition: 'fade', layout: 'shop' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue'),
    meta: { transition: 'fade', layout: 'shop' },
  },
  {
    path: '/about',
    name: 'about',
    props: true,
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
    meta: { transition: 'fade', layout: 'shop' },
  },
  {
    path: '/checkout',
    name: 'checkout',
    props: true,
    component: () => import(/* webpackChunkName: "Checkout" */ '../views/Checkout.vue'),
    meta: { transition: 'fade', layout: 'shop' },
  },
  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: () => import(/* webpackChunkName: "Product" */ '../views/Product.vue'),
    meta: { transition: 'fade', layout: 'shop' },
  },
  {
    path: '/order-done',
    name: 'order-done',
    props: true,
    component: () => import(/* webpackChunkName: "Order" */ '../views/Order.vue'),
    meta: { transition: 'fade', layout: 'shop' },
  },
  {
    path: '/admin',
    name: 'admin',
    props: true,
    meta: { layout: 'admin' },
    component: () => import(/* webpackChunkName: "Admin" */ '../views/admin/layouts/Admin.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        meta: { layout: 'auth' },
        component: () => import(/* webpackChunkName: "Admin" */ '../views/admin/layouts/Login.vue'),
      },
      {
        path: 'orders',
        name: 'orders',
        meta: { layout: 'admin' },
        component: () => import(/* webpackChunkName: "Admin" */ '../views/admin/layouts/Orders.vue'),
      },
      {
        path: 'products',
        name: 'products',
        meta: { layout: 'admin' },
        component: () => import(/* webpackChunkName: "Admin" */ '../views/admin/layouts/Products.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
