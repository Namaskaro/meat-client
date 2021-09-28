import axios from 'axios';

export default {
  namespaced: true,
  state: {
    admin: null,
    orders: [],
    products: [],
    isAuthenticated: false,
  },
  getters: {
    admin: state => state.admin,
    orders: state => state.orders,
    products: state => state.products,
  },
  mutations: {
    setAdmin(state, admin) {
      state.admin = admin;
      state.isAuthenticated = true;
    },
  },
  actions: {
    async signIn({ commit }, { login, password }) {
      try {
        const admin = await axios
          .post('http://localhost:4000/api/v1/auth/login', {
            login,
            password,
          })
          .then(res => res.data);
        const adminToken = admin.accessToken;
        localStorage.setItem('adminToken', adminToken);
        commit('setAdmin', admin);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
