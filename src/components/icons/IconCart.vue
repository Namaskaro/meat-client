<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    :class="'h-' + height"
    :style="'w-' + width"
    viewBox="0 0 24 24"
    :stroke="iconColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconCart',

  props: {
    width: {
      type: [Number, String],
      default: 6,
    },
    height: {
      type: [Number, String],
      default: 6,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
