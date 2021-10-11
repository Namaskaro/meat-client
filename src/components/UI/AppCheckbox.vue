<template>
  <label class=" text-sm block text-gray-600">{{ label }}</label>
  <input
    class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
    value="value"
    type="radio"
    @change="$emits('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'AppCheckbox',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>
