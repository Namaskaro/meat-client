import axios from 'axios';
import useNotification from '../composable/useNotification';
import { getCart, deleteItem } from '../services/cart.service';
import { createUser, getUser } from '../services/user.service';

export default {
  namespaced: true,
  state: {
    userAccessKey: null,
    cartItems: [],
    cart: {},
    cartTotal: 0,
  },

  getters: {
    cartItems: state => state.cart.items,
    // cartItems: (state, getters) => getters.cart.items,
    // cartCount: state => state.cart.items.length,
    cart: state => state.cart,
    cartTotal: state => state.cart.subTotal,
    userAccessKey: state => state.userAccessKey,
  },

  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
    setCartToken(state, cartToken) {
      state.cartToken = cartToken;
    },
    // setCartTotal(state, cartTotal) {
    //   state.cartTotal = cartTotal;
    // },
    setCartItems(state, cartItems) {
      state.cartItems = cartItems;
    },
    setUserAccessKey(state, userAccessKey) {
      state.userAccessKey = userAccessKey;
    },
    updateUserAccessKey(state, userAccessKey) {
      state.userAccessKey = userAccessKey;
    },
  },

  actions: {
    async getUser({ commit }) {
      try {
        const userAccessKey = await createUser().then(res => res.userAccessKey);
        localStorage.setItem('userToken', userAccessKey);
        commit('setUserAccessKey', userAccessKey);
      } catch (error) {
        console.log(error);
      }
    },
    async getUserAccessKey({ commit }) {
      const id = localStorage.getItem('userToken');
      const userAccessKey = await axios
        .get(`http://localhost:4000/api/v1/users/${id}`)
        .then(res => res.userAccessKey);
      commit('updateUserAccessKey', userAccessKey);
    },
    async getCart({ commit, state }) {
      const userId = state.userAccessKey;
      try {
        const cart = await axios
          .get(`http://localhost:4000/api/v1/cart/${userId}`, { params: { userId } })
          .then(res => res.data);
        commit('setCart', cart);
      } catch (error) {
        console.log(error);
      }
    },
    async getCartItems({ commit }) {
      try {
        const cartItems = await axios
          .get('http://localhost:4000/api/v1/cart')
          .then(res => res.items);
        commit('setCartItems', cartItems);
      } catch (error) {
        console.log(error);
      }
    },
    async addProductToCart({ dispatch, commit, state }, { productId, quantity }) {
      const userId = state.userAccessKey;
      try {
        const cart = await axios
          .post(
            `http://localhost:4000/api/v1/cart/${userId}`,
            {
              productId,
              quantity,
              userId,
            },
            {
              params: {
                userId: state.userAccessKey,
              },
            },
          )
          .then(res => {
            dispatch('getCart');
            const { setNotification } = useNotification();
            setNotification(`Товар ${productId} добавлен в корзину`);
            const cartItems = res.data.items;
            commit('setCartItems', cartItems);
            commit('setCart', cart);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItemFromCart({ commit }) {
      try {
        await deleteItem();
        commit('deleteItem');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
