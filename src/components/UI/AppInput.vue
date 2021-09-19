<template>
  <div class="w-full flex flex-col mb-1">
    <label class="font-semibold text-gray-600 py-2 ml-1 relative"
      >{{ label }}
      <IconCheck iconColor="green" class="absolute top-4 right-1" v-if="valid" />
      <IconExclamationCircle iconColor="red" class="absolute top-3 right-1" />
    </label>
    <div class="relative w-full flex flex-col">
      <input
        :class="[$style.baseInput, variant && $style[variant]]"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="$emit('onFocus')"
      />
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        <IconEye v-if="type === 'password'" />
      </div>
    </div>
  </div>
</template>

<script>
import IconCheck from '@components/icons/IconCheck.vue';
import IconExclamationCircle from '../Icons/IconExclamationCircle.vue';

export default {
  components: {
    IconCheck,
    IconExclamationCircle,
    IconEye,
  },
  name: 'BaseInput',
  props: {
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
    variant: {
      type: String,
      default: 'baseInput',
    },
  },

  setup() {
    const onFocus = () => {
      $emits('focus');
    };
    return {
      onFocus,
    };
  },

  emits: ['update:modelValue', 'onFocus'],
};
</script>

<style lang="postcss" module>
.baseInput {
  /* @apply appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-400 rounded-lg h-10 px-4; */
  @apply block text-sm py-3 px-4 rounded-lg border outline-none;
}
.floating {
  @apply pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none;
}
</style>
