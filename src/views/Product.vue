<template>
  <h1>Product</h1>
  <span>{{ product.title }}</span>
  <img :src="product.imageUrl" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      product: 'products/product',
    }),
  },
  methods: {
    ...mapActions({
      fetchProduct: 'products/fetchProduct',
    }),
  },
  async mounted() {
    const id = this.$route.params.id;
    this.product = await this.fetchProduct(id);
  },
};
</script>
