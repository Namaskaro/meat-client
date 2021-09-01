const state = {
  cart: [],
  userAccessKey: null,
};
const getters = {};
const mutations = {
  setProducts(state, cart) {
    state.cart = cart;
  },
};
const actions = {
  async fetchCart({ commit }) {
    try {
      const cart = await getProducts();
      commit('setCart', cart);
    } catch (error) {
      commit('setProductError');
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
