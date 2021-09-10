<template>
  <!-- <AppBanner>
    <div class="container mx-auto"></div>
  </AppBanner> -->

  <main>
    <FlexWrapper>
      <template #loader>
        <Loader
          v-if="isLoading"
          :animation-duration="2000"
          :size="65"
          color="red"
          class="absolute inset-2/4"
        />
      </template>

      <template #content>
        <AppCard
          v-for="product in products"
          :key="product._id"
          :product="product"
          :price="product.price"
          :title="product.title"
          :description="product.description"
          :image="product.imageUrl"
          @add-to-cart="addToCart(product._id, 1)"
        />
      </template>
    </FlexWrapper>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import AppBanner from '../components/UI/AppBanner.vue';
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
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      products: 'products/products',
      isLoading: 'products/isLoading',
      cartItems: 'cart/cartItems',
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      // getCart: 'cart/getCart',
    }),
    addToCart(id, quantity) {
      this.$store.dispatch('cart/addProductToCart', {
        productId: id,
        quantity: 1,
      });
    },
  },
  mounted() {
    this.fetchProducts();
    // this.getCart();
  },
};
</script>
