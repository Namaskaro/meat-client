<template>
  <div class="flex flex-col">
    <div class="bg-white shadow-md  rounded-xl p-4">
      <div class="flex lg:flex">
        <div class="w-5/12 lg:mb-0 mb-3">
          <img
            :src="image"
            alt="Cart Product"
            class="w-full h-full  object-contain lg:object-contain lg:h-full rounded-2xl"
          />
        </div>
        <div class="flex flex-col">
          <div class="ml-3 py-2 w-full">
            <div class="flex flex-wrap ">
              <h2 class=" text-lg font-medium">{{ title }}</h2>
            </div>
          </div>
          <div class="ml-3 py-2 w-full">
            <div class="flex flex-wrap">
              <span>{{ quantity }}</span>
            </div>
            <div class="flex flex-wrap ">
              <span>{{ productTotal }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutItem',
  props: {
    image: {
      type: String,
      required: true,
      default: () => '',
    },
    title: {
      type: String,
      required: true,
      default: () => '',
    },
    quantity: {
      type: Number,
      required: true,
      default: () => 1,
    },
    productTotal: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },
};
</script>
