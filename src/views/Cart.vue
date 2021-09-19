<template>
  <div>
    <div class="py-12">
      <div class="max-w-md mx-auto bg-gray-100 dark:bg-black shadow-lg rounded-lg md:max-w-5xl">
        <div class="md:flex ">
          <div class="w-full p-4 px-5 py-5">
            <div class="md:grid md:grid-cols-3 gap-2 ">
              <template v-if="!isEmpty">
                <div class="col-span-3 p-5">
                  <h1 class="text-xl font-medium ">Корзина</h1>
                  <CartItem
                    v-for="item in items"
                    :key="item._id"
                    :title="item.title"
                    :image="item.image"
                    :price="item.price"
                    :productId="item.productId"
                    :quantity="item.quantity"
                    v-model="item.quantity"
                    @removeItem="deleteCartItem(item.productId)"
                    @increase-qty="plusQty(item.productId, 1)"
                    @decrease-qty="minusQty(item.productId, 1)"
                  />

                  <div class="flex flex-row justify-end">
                    <span>{{ total }}</span>
                  </div>
                  <div class="flex justify-between flex-wrap mt-12">
                    <AppButton
                      title="Продолжить покупки"
                      text="white"
                      variant="green"
                      rounded="2xl"
                      size="sm"
                    >
                      <IconArrowLeft />
                      <router-link :to="{ name: 'home' }">
                        Продолжить покупки
                      </router-link>
                    </AppButton>
                    <AppButton
                      title="Оформить заказ"
                      text="white"
                      variant="green"
                      rounded="2xl"
                      size="sm"
                    >
                      <router-link :to="{ name: 'checkout' }">
                        Оформить заказ
                      </router-link>
                    </AppButton>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="flex flex-col items-center p-6">
                  <img src="@/assets/img/empty-cart.png" class="w-96 h-full" />
                  <h1>Your cart is empty</h1>
                  <AppButton text="white" variant="green" rounded="2xl" size="sm">
                    <router-link to="/">
                      Обратно в магазин
                    </router-link>
                  </AppButton>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppButton from '@/components/UI/AppButton.vue';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
import CartItem from '@/components/UI/CartItem.vue';

export default {
  name: 'Cart',
  components: {
    AppButton,
    CartItem,
    IconArrowLeft,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters({
      cart: 'cart/cart',
      items: 'cart/cartItems',
      cartTotal: 'cart/cartTotal',
    }),
    total() {
      return this.cartTotal;
    },
    isEmpty() {
      return !Object.keys(this.cart).length;
    },
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart',
      addItem: 'cart/addProductToCart',
      removeItem: 'cart/decrementQuantity',
    }),
    deleteCartItem(productId) {
      this.$store.dispatch('cart/deleteItemFromCart', productId);
    },
    plusQty(id, quantity) {
      this.addItem({
        productId: id,
        quantity: 1,
      });
    },
    minusQty(id, quantity) {
      this.removeItem({
        productId: id,
        quantity: 1,
      });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
