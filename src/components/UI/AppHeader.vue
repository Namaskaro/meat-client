<template>
  <header class="text-gray-100 bg-header body-font shadow w-full dark:bg-black dark:text-white">
    <div class="container mx-auto flex  p-3 flex-row md:flex-row items-center">
      <nav class="flex w-1/5 lg:w-1/5 flex-wrap items-center text-base  dark:text-white">
        <router-link :to="{ name: 'about' }" class="nav-link">О нас</router-link>
      </nav>
      <div class="w-2/5 lg:w-2/5 inline-flex justify-center lg:justify-end ml-5 lg:ml-0">
        <AppToggleTheme />
      </div>
      <div class="w-2/5 lg:w-2/5 inline-flex justify-end lg:justify-end ml-5 lg:ml-0 relative">
        <router-link :to="{ name: 'cart' }">
          <IconBag />
          <AppBadge />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import AppToggleTheme from './AppToggleTheme.vue';
import IconBag from '@/components/icons/IconBag.vue';
import AppBadge from '@/components/UI/AppBadge.vue';

export default {
  name: 'AppHeader',
  components: {
    AppToggleTheme,
    IconBag,
    AppBadge,
  },
  props: {
    cartCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="postcss" scoped>
.nav-link {
  @apply mr-5 text-gray-600 font-semibold cursor-pointer;
}
.nav-link:hover {
  @apply text-green-700;
}
.nav-link:dark {
  @apply text-white;
}
</style>
