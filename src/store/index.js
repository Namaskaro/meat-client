import { createStore } from 'vuex';
import products from './products';
import theme from './theme';
import cart from './cart';
import admin from './admin';

export default createStore({
  state: {
    paymentInfo: [],
  },
  getters: {
    paymentInfo: state => state.paymentInfo,
  },
  mutations: {
    setPaymentInfo(state) {
      state.paymentInfo = paymentInfo;
    },
  },
  actions: {
    async getPaymentInfo({ commit }) {
      const paymentInfo = await axios;
    },
  },
  modules: {
    products,
    theme,
    cart,
    admin,
  },
  strict: process.env.NODE_ENV !== 'production',
});
