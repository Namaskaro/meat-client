import axios from 'axios';
import useNotification from '../composable/useNotification';
import { createUser, getUser } from '../services/user.service';
import { getCartItems } from '../services/cart.service';

export default {
  namespaced: true,
  state: {
    userAccessKey: null,
    user: null,
    cart: {},
    cartItems: [],
  },

  getters: {
    userAccessKey: state => state.userAccessKey,
    user: state => state.user,
    cartItems: state => state.cartItems,
  },

  mutations: {
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
    setCartItems(state, cartItems) {
      state.cartItems = cartItems;
    },
  },

  actions: {
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
    async getCart({ commit }) {
      try {
        const cartItems = await getCartItems();
        commit('setCartItems', cartItems);
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
            const { setNotification } = useNotification();
            setNotification(`Товар ${productId} добавлен в корзину`);
            commit('updateCartProductsData');
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
