import { createSSRApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';

if (process.isClient && window.SSRVuexInitialState !== undefined) {
  store.replaceState(window.SSRVuexInitialState);
}

const createApp = () => ({
  app: createSSRApp(App)
    .use(store)
    .use(router),
  store,
  router,
});

export default createApp;
