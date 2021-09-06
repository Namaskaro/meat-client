import axios from 'axios';
import { getProduct, getProducts } from '../services/products.service';

export default {
  namespaced: true,
  state: {
    products: [],
    product: {},
    isLoading: false,
    productError: null,
  },
  getters: {
    products: ({ products }) => products,
    product: state => state.product,
    isLoading: state => state.isLoading,
  },
  mutations: {
    setProduct(state, product) {
      state.product = product;
    },
    setProductsStart(state) {
      state.isLoading = true;
    },
    setProductsSuccess(state, products) {
      state.products = products;
      state.isLoading = false;
    },
    setProductsError(state, error) {
      state.productError = error;
      state.isLoading = false;
    },
  },
  actions: {
    async fetchProduct({ commit }, id) {
      try {
        const product = await axios
          .get(`http://localhost:4000/api/v1/products/${id}`)
          .then(response => response.data.data);
        commit('setProduct', product);
      } catch (error) {
        commit('setProductError');
      }
    },
    async fetchProducts({ commit }) {
      try {
        commit('setProductsStart');
        const products = await getProducts();
        commit('setProductsSuccess', products);
      } catch (error) {
        commit('setProductsFailure', error);
      }
    },
  },
};
