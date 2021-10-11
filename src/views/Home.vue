<template>
  <AppSlider />

  <main>
    <FlexWrapper>
      <template #loader>
        <Loader v-if="isLoading" :animation-duration="2000" :size="65" color="red" class="absolute inset-2/4" />
      </template>
      <template #content>
        <div class="col-span-full">
          <h1>Свинина</h1>
        </div>
        <AppCard
          v-for="product in pork"
          :key="product._id"
          :product="product"
          :price="product.price"
          :title="product.title"
          :description="product.description"
          :image="product.imageUrl"
          @add-to-cart="addToCart(product._id, product.title, 1)"
        />
      </template>
    </FlexWrapper>
    <FlexWrapper>
      <template #loader>
        <Loader v-if="isLoading" :animation-duration="2000" :size="65" color="red" class="absolute inset-2/4" />
      </template>
      <template #content>
        <div class="col-span-full">
          <h1>Пицца</h1>
        </div>
        <AppCard
          v-for="product in pizza"
          :key="product._id"
          :product="product"
          :price="product.price"
          :title="product.title"
          :description="product.description"
          :image="product.imageUrl"
          @add-to-cart="addToCart(product._id, product.title, 1)"
        />
      </template>
    </FlexWrapper>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import AppBanner from '../components/UI/AppBanner.vue';
import AppSlider from '@/components/UI/AppSlider.vue';
import AppCard from '@/components/UI/AppCard.vue';
import FlexWrapper from '@/components/layout/FlexWrapper.vue';
import Loader from '@/components/UI/Loader.vue';

export default {
  name: 'Home',
  components: {
    // AppBanner,
    AppCard,
    FlexWrapper,
    Loader,
    AppSlider,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      products: 'products/products',
      isLoading: 'products/isLoading',
      cartItems: 'cart/cartItems',
      categories: 'categories/categories',
    }),
    pork() {
      return this.categories[1]?.products;
    },
    pizza() {
      return this.categories[9]?.products;
    },
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      fetchCategories: 'categories/fetchCategories',
    }),
    addToCart(id, title, quantity) {
      this.$store.dispatch('cart/addProductToCart', {
        productId: id,
        productName: title,
        quantity: 1,
      });
    },
  },
  mounted() {
    // this.fetchCategories();
    // this.fetchProducts();
  },
};
</script>
