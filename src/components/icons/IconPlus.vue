<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :fill="iconColor" :class="'h-' + height">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
  </svg>
</template>

<script>
export default {
  name: 'IconCheck',
  props: {
    width: {
      type: [Number, String],
      default: 5,
    },
    height: {
      type: [Number, String],
      default: 5,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
