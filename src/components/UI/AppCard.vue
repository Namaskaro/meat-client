<template>
  <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-white">
    <img class="w-full" :src="image" alt="River" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
      <p>{{ price }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <AppButton
        title="Купить"
        text="white"
        variant="green"
        rounded="2xl"
        size="md"
      >
        Купить
        <IconCart iconColor="#ffffff" height="5" width="5" class="mt-1 ml-1" />
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import IconCart from '../icons/IconCart.vue';

export default {
  name: 'AppCard',
  components: {
    AppButton,
    IconCart,
  },
  props: {
    title: {
      type: String,
      default: () => '',
      required: true,
    },
    description: {
      type: String,
      default: () => '',
      required: true,
    },
    price: {
      type: Number,
      default: () => 0,
      required: true,
    },
    image: {
      type: String,
      default: () => '',
      required: true,
    },
  },
};
</script>
