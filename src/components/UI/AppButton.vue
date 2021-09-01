<template>
  <button
    :class="[
      $style.baseButton,
      variant && $style[variant],
      $style[`size-${size}`],
      $style[`text-${text}`],
      $style[`rounded-${rounded}`],
    ]"
    v-bind="$attrs"
  >
    <slot v-if="loading" name="loader">
      <p>Loading...</p>
    </slot>
    <slot v-else name="default"> </slot>
    <slot name="icon"></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: '#000000',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'white',
    },
    rounded: {
      type: String,
      default: 'none',
    },
    size: {
      type: String,
      default: 'sm',
    },
  },
  emits: ['click'],
};
</script>

<style lang="postcss" module>
.baseButton {
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: 0.25s all;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

.red {
  background-color: red;
}

.green {
  background-color: #afe1af;
}

.pastel-green {
  background-color: #c1e1c1;
}

.size-sm {
  padding: 0.3rem 1rem !important;
}

.size-md {
  padding: 0.6rem 1.5rem !important;
}

.size-xl {
  padding: 2rem 4rem !important;
}

.transparent {
  background-color: transparent;
}
.text-white {
  @apply text-gray-50;
}
.loaderMargin {
  @apply p-4;
}
.rounded-sm {
  border-radius: 6px;
}
.rounded-md {
  border-radius: 10px;
}
.rounded-lg {
  border-radius: 12px;
}
.rounded-xl {
  border-radius: 15px;
}
.rounded-2xl {
  border-radius: 21px;
}
</style>
