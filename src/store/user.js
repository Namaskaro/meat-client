import { createUser, getUser } from '../services/user.service';

const state = {
  userAccessKey: null,
  user: null,
};

const getters = {
  userAccessKey: state => state.userAccessKey,
  user: state => state.user,
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
};

const actions = {
  async createUser({ commit }) {
    try {
      const user = await createUser();
      const userAccessKey = user.userAccessKey;
      if (!userAccessKey) {
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
