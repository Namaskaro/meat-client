<template>
  <div>
    <form @submit.prevent="$emit('onSubmit')">
      <div class="mt-2 flex flex-col">
        <label for="" class="text-sm text-gray-00">Название товара</label>
        <input type="text" placeholder="Название товара" class="border p-2 w-full mt-3" v-model="title" />
      </div>
      <!-- <div class="mt-2 flex flex-col">
        <label for="" class="text-sm text-gray-00">Состав</label>
        <input type="text" placeholder="Состав" class="border p-2 w-full mt-3" v-model="composition" />
      </div> -->
      <div class="mt-2 flex flex-col">
        <label for="" class="text-sm text-gray-00">Картинка</label>
        <input type="text" placeholder="url картинки" class="border p-2 w-1/2 mt-3" v-model="imageUrl" />
      </div>
      <div class="mt-2 flex flex-col">
        <label for="" class="text-sm text-gray-00">Цена</label>
        <input type="number" placeholder="Цена" class="border p-2 w-1/2 mt-3" v-model="price" />
      </div>
      <div class="mt-2 flex flex-col">
        <AppTextarea :rows="5" label="Комментарий" v-model="description" />
      </div>
      <div class="mt-2 flex flex-col">
        <label for="" class="text-sm text-gray-00">Категория</label>
        <AppSelect :options="titles" class="w-1/2" />
      </div>
      <div class="mt-2 flex flex-col">
        <AppButton variant="green" @click="handleSubmit">Создать</AppButton>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppSelect from '@/components/UI/AppSelect.vue';
import AppButton from '@/components/UI/AppButton.vue';
import AppTextarea from '@/components/UI/AppTextarea.vue';

export default {
  name: 'ProductCrudForm',
  components: {
    AppSelect,
    AppButton,
    AppTextarea,
  },
  data() {
    return {
      title: '',
      price: 0,
      description: '',
      imageUrl: '',
    };
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories',
    }),
    titles() {
      return this.categories.map(item => item.title);
    },
  },
  methods: {
    ...mapActions({
      fetchCategories: 'categories/fetchCategories',
      createProduct: 'products/createProduct',
    }),
    handleSubmit() {
      this.createProduct({
        title: this.title,
        description: this.description,
        price: this.price,
        imageUrl: this.imageUrl,
      });
    },
  },
  mounted() {
    this.fetchCategories();
  },
  emits: 'onSubmit',
};
</script>
