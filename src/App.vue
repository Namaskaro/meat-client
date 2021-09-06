<template>
  <div class="relative">
    <AppHeader />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <transition name="fade" mode="out-in">
      <Notification :notification="notification" :toggleNotification="toggleNotification">
      </Notification>
    </transition>
    <AppFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from '@/components/UI/AppHeader.vue';
import AppFooter from '@/components/UI/AppFooter.vue';
import Notification from '@/components/UI/Notification.vue';
import useNotification from '@/composable/useNotification';

export default {
  components: {
    AppHeader,
    AppFooter,
    Notification,
  },
  setup() {
    const { notification, setNotification, toggleNotification } = useNotification();
    return { notification, setNotification, toggleNotification };
  },
  beforeMount() {
    this.$store.dispatch('initTheme');
    const existingUser = localStorage.getItem('user');
    if (!existingUser) {
      this.createUser();
    }
  },

  computed: {
    ...mapGetters({ theme: 'getTheme' }),
  },
  methods: {
    ...mapActions(['resetTheme', 'cart/createUser', 'cart/deleteUser']),
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

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
