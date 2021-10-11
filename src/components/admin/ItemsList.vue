<template>
  <div class="col-span-full">
    <table class="w-full">
      <thead>
        <tr
          class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
        >
          <th class="px-4 py-3">Картинка</th>
          <th class="px-4 py-3">Название</th>
          <th class="px-4 py-3">Описание</th>
          <th class="px-4 py-3">Цена</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
        <Item v-for="item in items" :key="item" :title="item.title" :description="item.description" :price="item.price" :image="item.imageUrl" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Item from '@/components/admin/Item.vue';

export default {
  name: 'ItemsList',
  components: {
    Item,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
