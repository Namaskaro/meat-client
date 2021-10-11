import axios from 'axios';
import useNotification from '../composable/useNotification';
import { getCart, removeItem } from '../services/cart.service';
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
    cartItems: ({ cartItems }) => cartItems,
    // cartCount: state => state.cartItems.length || 0,
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
    setCartItems(state, cartItems) {
      state.cartItems = cartItems;
    },
    setUserAccessKey(state, userAccessKey) {
      state.userAccessKey = userAccessKey;
    },
    updateUserAccessKey(state, userAccessKey) {
      state.userAccessKey = userAccessKey;
    },
    updateCartProductQuantity(state, { productId, quantity }) {
      const item = state.cartItems.find(item => item.productId === productId);
      if (item) {
        product.quantity = quantity;
      }
    },

    // setCartIsNotEmpty(state) {
    //   localStorage.setItem('isEmpty', false);
    //   state.isEmpty = false;
    // },
  },

  actions: {
    async getUser({ commit }) {
      try {
        const userAccessKey = await createUser().then(res => res.userAccessKey);
        if (typeof window !== 'undefined') {
          localStorage.setItem('userToken', userAccessKey);
          commit('setUserAccessKey', userAccessKey);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getUserAccessKey({ commit }) {
      if (typeof window !== 'undefined') {
        const id = localStorage.getItem('userToken');
        const userAccessKey = await axios.get(`http://localhost:4000/api/v1/users/${id}`).then(res => res.userAccessKey);
        commit('updateUserAccessKey', userAccessKey);
      }
    },
    async getCart({ commit, state }) {
      const userId = state.userAccessKey;
      try {
        const cart = await axios.get(`http://localhost:4000/api/v1/cart/${userId}`, { params: { userId } }).then(res => res.data);
        commit('setCart', cart);
        commit('setCartItems', cart.items);
      } catch (error) {
        console.log(error);
      }
    },
    async getCartItems({ commit }) {
      try {
        const cartItems = await axios.get('http://localhost:4000/api/v1/cart').then(res => res.items);
        commit('setCartItems', cartItems);
      } catch (error) {
        console.log(error);
      }
    },
    async addProductToCart({ dispatch, commit, state }, { productId, productName, quantity, weightPerPlus }) {
      const userId = state.userAccessKey;
      try {
        const cart = await axios
          .post(`http://localhost:4000/api/v1/cart/${userId}`, {
            productId,
            quantity,
            userId,
            weightPerPlus,
          })
          .then(res => {
            const { setNotification } = useNotification();
            setNotification(`Товар ${productName} успешно добавлен`);
            dispatch('getCart', cart);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async decrementQuantity({ dispatch, commit, state }, { productId, quantity }) {
      const userId = state.userAccessKey;
      try {
        const cart = axios
          .put(`http://localhost:4000/api/v1/cart/${userId}`, {
            productId,
            quantity,
            userId,
          })
          .then(cart => {
            dispatch('getCart', cart);
          });
      } catch (error) {
        console.log(error);
      }
    },

    async updateQuantity({ dispatch, commit, state }, { productId, quantity }) {
      const userId = state.userAccessKey;
      try {
        const cart = axios
          .patch(`http://localhost:4000/api/v1/cart/${userId}`, {
            productId,
            quantity,
            userId,
          })
          .then(cart => {
            commit('setCartItems', cart.items);
            dispatch('getCart', cart);
          });
      } catch (error) {
        console.log(error);
      }
    },

    async deleteItemFromCart({ commit, dispatch, state }, productId) {
      const userId = state.userAccessKey;
      try {
        const cart = await axios.delete(`http://localhost:4000/api/v1/cart/${userId}/${productId}`).then(cart => {
          dispatch('getCart', cart);
          commit('setCartItems', cart.items);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
