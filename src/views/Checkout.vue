<template>
  <div class="py-12">
    <div class="max-w-md mx-auto  rounded-lg md:max-w-5xl">
      <div class="md:flex ">
        <div class="w-full">
          <div class="md:grid md:grid-cols-12 gap-2 ">
            <div class="col-span-7">
              <form class="max-w-xl m-4 p-6 bg-white rounded-lg shadow-xl">
                <p class="text-gray-800 font-medium">Customer information</p>
                <div class="mt-2">
                  <label class="block text-sm text-gray-00">Имя</label>
                  <input
                    class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
                    type="text"
                    placeholder="Ваше имя"
                    aria-label="Name"
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-00">Телефон</label>
                  <input
                    class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
                    type="text"
                    placeholder="Телефон"
                    aria-label="Phone"
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600">Электронная почта</label>
                  <input
                    class="w-full px-5  py-2 bg-white rounded-lg border border-gray-300"
                    type="text"
                    placeholder="Ваш email"
                    aria-label="Email"
                  />
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600">Город</label>
                  <input
                    class="w-full px-2 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
                    type="text"
                    placeholder="Город"
                    aria-label="City"
                  />
                </div>
                <div class="mt-2">
                  <label class=" text-sm block text-gray-600">Адрес</label>
                  <input
                    class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    type="text"
                    placeholder="Адрес"
                    aria-label="Address"
                  />
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                  <label class=" block text-sm text-gray-600" for="cus_email">Country</label>
                  <AppSelect :options="deliveryType" />
                </div>
                <!-- <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                  <label class=" block text-sm text-gray-600">Zip</label>
                  <AppSelect />
                </div> -->
                <div class="mt-4">
                  <AppButton title="Купить" text="white" variant="green" rounded="xl" size="full">
                    <router-link to="{ name: 'order-done' }">
                      Оплатить
                    </router-link>
                  </AppButton>
                </div>
              </form>
            </div>
            <div class="col-span-5">
              <div class="p-4">
                <CheckoutItem
                  v-for="item in items"
                  :key="item._id"
                  :title="item.title"
                  :image="item.image"
                  :quantity="item.quantity"
                  :productTotal="item.total"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import CheckoutItem from '@/components/UI/CheckoutItem.vue';
import AppButton from '@/components/UI/AppButton.vue';
import AppSelect from '@/components/UI/AppSelect.vue';

export default {
  components: {
    CheckoutItem,
    AppButton,
    AppSelect,
  },
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      deliveryType: [{ title: 'Самовывоз' }, { title: 'Курьером' }],
    };
  },
  computed: {
    ...mapGetters({
      items: 'cart/cartItems',
      total: 'cart/cartTotal',
    }),
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart',
    }),
  },
  mounted() {
    this.getCart();
  },

  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    };
  },
};
</script>
<style></style>
