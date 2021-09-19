<template>
  <select
    class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="(option, i) in options" :key="i">{{ option }} </option>
  </select>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: () => '',
    },
  },
  emits: ['update:modelValue'],
};
</script>
