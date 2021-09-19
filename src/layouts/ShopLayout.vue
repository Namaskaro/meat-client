<template>
  <AppHeader />
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
  <transition name="fade" mode="out-in">
    <Notification :notification="notification" :toggleNotification="toggleNotification"> </Notification>
  </transition>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/UI/AppHeader.vue';
import AppFooter from '@/components/UI/AppFooter.vue';
import Notification from '@/components/UI/Notification.vue';
import useNotification from '@/composable/useNotification';

export default {
  components: {
    AppFooter,
    AppHeader,
    Notification,
  },
  setup() {
    const { notification, setNotification, toggleNotification } = useNotification();
    return { notification, setNotification, toggleNotification };
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
