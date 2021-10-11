import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user: null,
    currentUser: null,
    isLoggedIn: null,
    isSubmitting: false,
    error: null
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    registerStart(state) {
        state.isSubmitting = true
    },
    registerSuccess(state, user) {
        state.isSubmitting = false
        state.isLoggedIn = true 
        state.user = user
    },
    registerFailure(state) {
        state.isSubmitting = true
    },
    loginStart(state) {
        state.isSubmitting = true
    },
    loginSuccess(state)
  },
  actions: {
    async registerUser({ commit }, { name, email, password }) {
      try {
          commit('registerStart')
        const user = await axios
          .post('http://localhost:4000/api/v1/auth/login', {
            name,
            email,
            password,
          })
          .then(res => res.data);
        commit('registerSuccess', user);
      } catch (error) {
        commit('registerFailure')
      }
    },
    async loginUser({commit}, {email,password}) {
        try{

        }catch(error) {

        }
    }
  },
};
