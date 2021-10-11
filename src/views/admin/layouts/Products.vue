<template>
  <div class="grid grid-cols-12">
    <div class="mt-8 mx-auto w-full col-span-full flex justify-evenly">
      <AppButton variant="green">
        <IconArrowLeft iconColor="#ffffff" height="5" width="5" class="mr-2 mt-3px" />
        К списку товаров</AppButton
      >
      <AppButton variant="green" @click="openProductCrudForm">
        Создать товар
        <IconPlus iconColor="#ffffff" height="5" width="5" class="ml-2 mt-3px" />
      </AppButton>
    </div>
    <FormPageWrapper class="col-span-full" v-if="open">
      <ProductCrudForm />
    </FormPageWrapper>
    <ItemsList :items="products" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ItemsList from '@/components/admin/ItemsList.vue';
import FormPageWrapper from '@/components/admin/FormPageWrapper.vue';
import AppButton from '@/components/UI/AppButton.vue';
import ProductCrudForm from '@/components/admin/ProductCrudForm.vue';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
import IconPlus from '@/components/icons/IconPlus.vue';

export default {
  name: 'Products',
  components: {
    FormPageWrapper,
    AppButton,
    ProductCrudForm,
    IconArrowLeft,
    IconPlus,
    ItemsList,
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    ...mapGetters({
      products: 'products/products',
      categories: 'categories/categories',
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      fetchCategories: 'categories/fetchCategories',
    }),
    openProductCrudForm() {
      this.open = !this.open;
    },
  },
  mounted() {
    this.fetchProducts();
    this.fetchCategories();
  },
};
</script>
