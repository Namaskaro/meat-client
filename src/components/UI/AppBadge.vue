<template>
  <div
    class="h-4 w-4 bg-green-600 text-white absolute -top-1.5 -right-1.5 rounded-xl flex items-center justify-center text-center text-sm font-semibold"
  >
    1
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppBadge',
  // computed: {
  //   ...mapGetters({
  //     cartCount: 'cart/cartCount',
  //   }),
  // },
};
</script>

<style></style>
