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
    return {};
  },
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
  },
  async mounted() {
    this.fetchProducts();
  },
};
</script>
