<template>
  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
    <td class="px-4 py-3">
      <div class="flex items-center text-sm">
        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
          <img class="object-cover w-full h-full rounded-full" :src="image" alt="" loading="lazy" />
          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        </div>
        <div>
          <p class="font-semibold">{{ title }}</p>
        </div>
      </div>
    </td>
    <td class="px-4 py-3 text-sm">{{ price }} руб</td>
    <td class="px-4 py-3 text-xs">
      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
        Approved
      </span>
    </td>
    <td class="px-4 py-3 text-sm">15-01-2021</td>
  </tr>
</template>

<script>
export default {
  name: 'Item',
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
};
</script>
