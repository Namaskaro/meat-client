<template>
  <div class="py-12">
    <div class="max-w-md mx-auto  rounded-lg md:max-w-5xl">
      <div class="md:flex ">
        <div class="w-full">
          <div class="md:grid md:grid-cols-12 gap-2 ">
            <div class="col-span-7">
              <form class="max-w-xl m-4 p-6 bg-white rounded-lg shadow-xl" @submit.prevent="console.log('Вы все оплатили')">
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
                    v-model="phone"
                  />
                </div>
                <div class="mt-2">
                  <label class=" text-sm block text-gray-600">Адрес</label>
                  <input
                    class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
                    type="text"
                    placeholder="Адрес"
                    aria-label="Address"
                    v-model="address"
                  />
                </div>
                <div class="mt-2">
                  <span>Выберите способ оплаты</span>
                </div>
                <div class="mt-2 flex w-full">
                  <div class="form_radio_btn">
                    <input id="radio" type="radio" name="radio" value="Наличными" v-model="paymentType" />
                    <label for="radio" class=" text-sm block text-gray-600">Наличными</label>
                  </div>
                  <div class="form_radio_btn">
                    <input id="radio-1" type="radio" name="radio" value="Картой" v-model="paymentType" />
                    <label for="radio-1" class=" text-sm block text-gray-600">Картой</label>
                  </div>
                </div>
                <div class="mt-2">
                  <!-- <label class=" text-sm block text-gray-600">Комментарий к заказу</label> -->
                  <AppTextarea rows="5" label="Комментарий к заказу" :maxLength="300" />
                </div>
                <div class="mt-4">
                  <AppButton title="Купить" text="white" variant="green" rounded="xl" size="full">
                    <router-link :to="{ name: 'order-done' }">
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
import { ref, reactive } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { maska } from 'maska';
import CheckoutItem from '@/components/UI/CheckoutItem.vue';
import AppButton from '@/components/UI/AppButton.vue';
import AppTextarea from '@/components/UI/AppTextarea.vue';

export default {
  components: {
    CheckoutItem,
    AppButton,
    AppTextarea,
  },
  directives: { maska },
  setup() {
    const name = ref('');
    const email = ref('');
    const address = ref('');
    const phone = ref('');
    const paymentType = ref('');

    return {
      name,
      email,
      address,
      phone,
      paymentType,
      v$: useVuelidate(),
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
        phone: {
          required,
        },
      },
    };
  },
};
</script>
<style lang="postcss" scoped>
.form_radio_btn {
  display: inline-block;
  margin-right: 10px;
  width: 50%;
}
.form_radio_btn input[type='radio'] {
  display: none;
}
.form_radio_btn label {
  display: inline-block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 0px 15px;
  line-height: 34px;
  border: 1px solid #999;
  border-radius: 6px;
  user-select: none;
}

/* Checked */
.form_radio_btn input[type='radio']:checked + label {
  background: #f1f1f1;
}

/* Hover */
.form_radio_btn label:hover {
  color: #666;
}
</style>
