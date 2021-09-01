import useNotification from '../composable/useNotification';

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
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;

      if (cachedTheme) commit('SET_THEME', cachedTheme);
      else if (userPrefersDark) commit('SET_THEME', 'dark');
      else commit('SET_THEME', 'light');
    },
    resetTheme({ commit }) {
      localStorage.removeItem('theme');
      commit('SET_THEME', 'light');
    },
    toggleTheme({ commit }) {
      const { setNotification } = useNotification();

      switch (localStorage.theme) {
        case 'light':
          commit('SET_THEME', 'dark');
          setNotification('Dark theme turned on!');
          break;

        default:
          commit('SET_THEME', 'light');
          setNotification('Light theme turned on!');
          break;
      }
    },
  },
};
