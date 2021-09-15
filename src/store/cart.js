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
    cartItems: ({ cartItems }) => cartItems,
    cartCount: state => state.cartItems.length,
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
    updateCartProductQuantity(state, { productId, quantity }) {
      const item = state.cartItems.find(item => item.productId === productId);
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
        commit('setCartItems', cart.items);
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
            // {
            //   params: {
            //     userId: state.userAccessKey,
            //   },
            // },
          )
          .then(res => {
            const { setNotification } = useNotification();
            setNotification(`Товар ${productId.title} добавлен в корзину`);
            const cartItems = res.data.items;
            // commit('setCartItems', cartItems);
            // commit('setCart', cart);
            dispatch('getCart');
            // dispatch('getCartItems', cartItems);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItemFromCart({ commit, state }, productId) {
      const userId = state.userAccessKey;
      try {
        const cart = await axios
          .delete(`http://localhost:4000/api/v1/cart/${userId}/${productId}`, {
            params: { userId, productId },
          })
          .then(res => {
            const cartItems = res.data.items;
            commit('setCart', cart);
            commit('setCartItems', cartItems);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
