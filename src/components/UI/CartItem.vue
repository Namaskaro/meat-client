<template>
  <div class="flex md:justify-between justify-center flex-wrap items-center mt-6 pt-6 ">
    <div class="flex items-center flex-wrap">
      <img :src="image" />
      <div class="flex flex-col md:ml-3 w-full md:w-1/2">
        <span class="md:text-md font-medium text-center text-gray-600 dark:text-white">{{
          title
        }}</span>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="pr-8 flex justify-center items-center">
        <button
          class="font-semibold text-2xl text-gray-600 dark:text-white hover:text-green-500"
          @click="$emit('decrease-qty')"
        >
          -
        </button>
        <input
          type="text"
          class="focus:outline-none bg-gray-100 border border-gray-500 h-7 w-10 rounded text-md px-2 mx-3"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <button
          class="font-semibold text-xl flex justify-center items-center text-gray-600 dark:text-white hover:text-green-500"
          @click="$emit('increase-qty')"
        >
          +
        </button>
      </div>
      <div class="pr-8 ">
        <span class="text-sm font-medium text-gray-600 dark:text-white">{{ price }}</span>
      </div>
      <button @click="$emit('remove-item')"><IconX /></button>
    </div>
  </div>
</template>

<script>
import IconX from '@/components/icons/IconX.vue';

export default {
  name: 'CartItem',
  components: {
    IconX,
  },
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  emits: ['update:modelValue', 'increase-qty', 'decrease-qty', 'remove-item'],
};
</script>

<style></style>
