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
import { mapGetters, mapActions, mapMutations } from 'vuex';
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
  // mounted() {
  //
  //   const token = localStorage.getItem('cartToken');
  //   if (!token) {
  //     this.createCart();
  //   }
  // },

  computed: {
    ...mapGetters({
      theme: 'getTheme',
    }),
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart',
      getUser: 'cart/getUser',
      getUserAccessKey: 'cart/getUserAccessKey',
    }),
    ...mapMutations({
      updateUserToken: 'cart/updateUserAccessKey',
    }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark');
    },
  },
  created() {
    this.$store.dispatch('initTheme');
    const userAccessKey = localStorage.getItem('userToken');
    if (userAccessKey) {
      this.updateUserToken(userAccessKey);
    } else {
      this.getUser();
    }
    this.getCart();
    // this.getItems();
  },
  mounted() {},
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
