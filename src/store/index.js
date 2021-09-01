import { createStore } from 'vuex';
import products from './products';
import theme from './theme';
import user from './user';

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
    user,
  },
});
