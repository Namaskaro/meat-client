export default {
  state: {
    theme: 'light',
  },
  getters: {
    getTheme: state => {
      return state.theme;
    },
    theme: state => state.theme,
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
      localStorage.theme = theme;
    },
  },
  actions: {
    initTheme({ commit }) {
      if (typeof window !== 'undefined') {
        const cachedTheme = localStorage.theme ? localStorage.theme : false;
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (cachedTheme) commit('SET_THEME', cachedTheme);
        else if (userPrefersDark) commit('SET_THEME', 'dark');
        else commit('SET_THEME', 'light');
      }
    },
    resetTheme({ commit }) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('theme');
        commit('SET_THEME', 'light');
      }
    },
    toggleTheme({ commit }) {
      if (typeof window !== 'undefined') {
        switch (localStorage.theme) {
          case 'light':
            commit('SET_THEME', 'dark');
            break;

          default:
            commit('SET_THEME', 'light');
            break;
        }
      }
    },
  },
};
