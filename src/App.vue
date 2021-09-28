<template>
  <div class="relative">
    <component :is="layout"> </component>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import ShopLayout from '@/layouts/ShopLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

export default {
  components: {
    ShopLayout,
    AuthLayout,
    AdminLayout,
  },
  computed: {
    ...mapGetters({
      theme: 'getTheme',
    }),
    layout() {
      return (this.$route.meta.layout || 'shop') + '-layout';
    },
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
      newTheme === 'light' ? document.querySelector('html').classList.remove('dark') : document.querySelector('html').classList.add('dark');
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
  },
};
</script>

<style lang="css"></style>
