<template>
  <label class="text-sm block text-gray-600">
    {{ label }}
    <textarea
      :rows="rows"
      cols="cols"
      maxlength="maxLength"
      placeholder="placeholder"
      class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
    >
    </textarea>
  </label>
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    rows: {
      type: Number,
      default: 4,
    },
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: 300,
    },
    cols: {
      type: Number,
      default: 6,
    },
  },
};
</script>

<style lang="postcss" scoped>
textarea {
  resize: none;
}
</style>
