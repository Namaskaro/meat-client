<template>
  <div>
    <div class="py-12">
      <div class="max-w-md mx-auto bg-gray-100 dark:bg-black shadow-lg rounded-lg md:max-w-5xl">
        <div class="md:flex ">
          <div class="w-full p-4 px-5 py-5">
            <div class="md:grid md:grid-cols-3 gap-2 ">
              <template v-if="cart">
                <div class="col-span-3 p-5">
                  <h1 class="text-xl font-medium ">Корзина</h1>
                  <!-- <CartItem
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
                  /> -->
                  <!--Cart Item Start-->
                  <div
                    class="flex md:justify-between justify-center flex-wrap items-center mt-6 pt-6 "
                    v-for="item in items"
                    :key="item._id"
                  >
                    <div class="flex items-center flex-wrap">
                      <img :src="item.image" />
                      <div class="flex flex-col md:ml-3 w-full md:w-1/2">
                        <span
                          class="md:text-md font-medium text-center text-gray-600 dark:text-white"
                          >{{ item.title }}</span
                        >
                      </div>
                    </div>
                    <div class="flex justify-center items-center">
                      <div class="pr-8 flex justify-center items-center">
                        <button
                          class="font-semibold text-2xl text-gray-600 dark:text-white hover:text-green-500"
                          @click="minusQty()"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          class="focus:outline-none bg-gray-100 border border-gray-500 h-7 w-10 rounded text-md px-2 mx-3"
                          v-model="item.quantity"
                        />
                        <span>{{ item.total }}</span>
                        <button
                          class="font-semibold text-xl flex justify-center items-center text-gray-600 dark:text-white hover:text-green-500"
                          @click="plusQty(item.productId, 1)"
                        >
                          +
                        </button>
                      </div>
                      <div class="pr-8 ">
                        <span class="text-sm font-medium text-gray-600 dark:text-white">{{
                          item.price
                        }}</span>
                      </div>
                      <button @click="$emit('remove-item')"><IconX /></button>
                    </div>
                  </div>
                  <!--Cart Item End-->
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
              <template v-if="!cart">
                <h1>Your cart is empty</h1>
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
// import CartItem from '@/components/UI/CartItem.vue';
import IconX from '@/components/icons/IconX.vue';

export default {
  name: 'Cart',
  components: {
    AppButton,
    IconArrowLeft,
    IconX,
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
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart',
      addItem: 'cart/addProductToCart',
      removeItem: 'cart/deleteItemFromCart',
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
  },
  mounted() {
    this.getCart();
  },
};
</script>
