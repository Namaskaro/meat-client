<template>
  <div class="relative">
    <AppHeader />
    <router-view />

    <Notification
      :notification="notification"
      :toggleNotification="toggleNotification"
    />
    <AppFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import AppHeader from './components/UI/AppHeader.vue';
import AppFooter from './components/UI/AppFooter.vue';
import Notification from './components/UI/Notification.vue';
import useNotification from './composable/useNotification';

export default {
  components: {
    AppHeader,
    AppFooter,
    Notification,
  },

  setup() {
    const {
      notification,
      setNotification,
      toggleNotification,
    } = useNotification();

    return {
      notification,
      toggleNotification,
      setNotification,
    };
  },

  beforeMount() {
    this.$store.dispatch('initTheme');
    const existingUser = localStorage.getItem('user');
    if (!existingUser) {
      this.createUser();
    }
  },
  mounted() {
    const userAccessKey = localStorage.getItem('user');
    if (userAccessKey) {
      this.updateUserAccessKey(userAccessKey);
    }
  },
  computed: {
    ...mapGetters({ theme: 'getTheme' }),
  },
  methods: {
    ...mapActions(['resetTheme', 'createUser', 'resetUser']),
    ...mapMutations(['updateUserAccessKey']),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark');
    },
  },
};
</script>

<style lang="css"></style>
