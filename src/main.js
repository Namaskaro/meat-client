import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';

store.dispatch('products/fetchProducts').then(() => {
  const app = createApp({
    setup() {
      store.dispatch('products/fetchProducts');
      const event = new Event('renderer-ready');
      window.document.dispatchEvent(event);
    },
    render() {
      return h(App);
    },
  });
  app.use(store);
  app.use(router);
  app.mount('#app');
});

// createApp({
//     setup() {
//       store.dispatch('products/fetchProducts');
//       const event = new Event('renderer-ready');
//       window.document.dispatchEvent(event);
//     },
//     render() {
//       return h(App);
//     },
// })
//   .use(store)
//   .use(router)
//   .mount('#app');
