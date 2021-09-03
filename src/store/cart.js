import axios from 'axios';
import { createUser, getUser } from '../services/user.service';

const state = {
  userAccessKey: null,
  user: null,
  items: [],
  cartProducts: [],
  cartProductsData: [],
};

const getters = {
  userAccessKey: state => state.userAccessKey,
  user: state => state.user,
  cartProductsData(state, rootGetters) {
    return state.cartProducts.map(item => {
      return {
        ...item,
        product: rootGetters.products.find(p => p._id === item.productId),
      };
    });
  },
};

const mutations = {
  setUserAccessKey(state, userAccessKey) {
    state.userAccessKey = userAccessKey;
  },
  setUser(state, user) {
    state.user = user;
  },
  updateUserAccessKey(state, userAccessKey) {
    state.userAccessKey = userAccessKey;
  },
  updateCartProductsData(state, items) {
    state.cartProductsData = items;
  },
  syncCartProducts(state) {
    state.cartProducts = state.cartProductsData.map(item => {
      return {
        productId: item.product.id,
        quantity: item.quantity,
      };
    });
  },
};

const actions = {
  async createUser({ commit }) {
    try {
      const user = await createUser();
      const userAccessKey = user.userAccessKey;
      if (userAccessKey) {
        localStorage.setItem('user', userAccessKey);
      }
      commit('setUserAccessKey', userAccessKey);
      commit('setUser', user);
    } catch (error) {
      console.log(error);
    }
  },

  async getUser({ commit }) {
    try {
      const user = await getUser();
      commit('setUser', user);
    } catch (error) {
      console.log(error);
    }
  },
  async addProductToCart({ state, commit }, { productId, quantity }) {
    try {
      await axios
        .post(
          'http://localhost:4000/api/v1/cart',
          {
            productId,
            quantity,
          },
          {
            params: {
              userAccessKey: state.userAccessKey,
            },
          },
        )
        .then(res => {
          commit('updateCartProductsData');
        });
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
