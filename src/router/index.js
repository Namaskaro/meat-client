import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
