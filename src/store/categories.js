import axios from 'axios';

export default {
  namespaced: true,
  state: {
    category: {},
    categories: [],
    categoryError: null,
  },
  getters: {
    category: ({ category }) => category,
    categories: state => state.categories,
    categoryError: ({ categoryError }) => categoryError,
    pork: state => state.categories[2].products,
  },
  mutations: {
    setCategory(state, category) {
      state.category = category;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCategoryError(state, error) {
      state.categoryError = error;
    },
  },
  actions: {
    async fetchCategory({ commit }, id) {
      try {
        const category = await getCategory(id);
        commit('setCategory', category);
      } catch (err) {
        commit('setCategoryError', err);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const categories = await axios.get('http://localhost:4000/api/v1/categories').then(res => res.data);
        commit('setCategories', categories);
      } catch (err) {
        commit('setCategoryError', err);
      }
    },
  },
};
