<template>
  <header
    class="text-gray-100 bg-header body-font shadow w-full dark:bg-black dark:text-white"
  >
    <div
      class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center"
    >
      <nav
        class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto dark:text-white"
      >
        <router-link
          to="about"
          class="mr-5 text-gray-600 hover:text-gray-900 cursor-pointer "
          >About</router-link
        >
        <a
          class="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600"
          >Products</a
        >
        <a
          class="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600"
          >Investor Relations</a
        >
        <a
          class="hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600"
          >Contact</a
        >
      </nav>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <AppToggleTheme />
      </div>
    </div>
  </header>
</template>

<script>
import AppToggleTheme from './AppToggleTheme.vue';

export default {
  name: 'AppHeader',
  components: {
    AppToggleTheme,
  },
};
</script>

<style></style>
