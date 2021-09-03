<template>
  <AppBanner>
    <div class="container mx-auto"></div>
  </AppBanner>
  <main>
    <FlexWrapper>
      <template #content>
        <AppCard
          v-for="product in products"
          :key="product.title"
          :price="product.price"
          :title="product.title"
          :description="product.description"
          :image="product.imageUrl"
          @add-to-cart="addToCart(product._id)"
        />
      </template>
    </FlexWrapper>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppBanner from '../components/UI/AppBanner.vue';
import AppCard from '../components/UI/AppCard.vue';
import FlexWrapper from '../components/layout/FlexWrapper.vue';

export default {
  name: 'Home',
  components: {
    AppBanner,
    AppCard,
    FlexWrapper,
  },
  data() {
    return {
      // product: null,
    };
  },
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
    addToCart(id, quantity) {
      this.$store.dispatch('addProductToCart', {
        productId: id,
        quantity: 1,
      });
    },
  },
  async mounted() {
    this.fetchProducts();
  },
};
</script>
