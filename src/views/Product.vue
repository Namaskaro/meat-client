<template>
  <section class="product-section">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 h-full">
        <div class="col-start-1 col-end-7">
          <img :src="product.imageUrl" class="product-section_image" />
        </div>
        <div class="col-start-7 col-end-12">
          <h1 class="text-center text-2xl font-bold">{{ product.title }}</h1>
          <div class="product-section_actions">
            <AppButton>
              Купить
            </AppButton>
            <IconInstagram />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppButton from '@/components/UI/AppButton.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';

export default {
  name: 'Product',
  components: {
    AppButton,
    IconInstagram,
  },
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

<style lang="postcss" scoped>
.product-section {
  background-color: #eae4e9;
  margin-top: 180px;
  margin-bottom: 180px;
}
.product-section_image {
  display: block;
  margin: 0 auto;
  width: 70%;
  height: auto;
}
</style>
