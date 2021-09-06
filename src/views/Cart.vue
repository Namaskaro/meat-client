<template>
  <div>
    <div class="py-12">
      <div class="max-w-md mx-auto bg-gray-100 dark:bg-black shadow-lg rounded-lg md:max-w-5xl">
        <div class="md:flex ">
          <div class="w-full p-4 px-5 py-5">
            <div class="md:grid md:grid-cols-3 gap-2 ">
              <div class="col-span-3 p-5">
                <h1 class="text-xl font-medium ">Корзина</h1>
                <div
                  class="flex md:justify-between justify-center flex-wrap items-center mt-6 pt-6 "
                >
                  <div class="flex items-center flex-wrap">
                    <img src="https://i.imgur.com/EEguU02.jpg" class="rounded-xl md:w-1/3 w-full" />
                    <div class="flex flex-col md:ml-3 w-full md:w-1/2">
                      <span class="md:text-md font-medium text-center text-gray-600 dark:text-white"
                        >Копченый брискет 0.5 кг</span
                      >
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <div class="pr-8 flex justify-center items-center">
                      <button
                        class="font-semibold text-2xl text-gray-600 dark:text-white hover:text-green-500"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        class="focus:outline-none bg-gray-100 border border-gray-500 h-7 w-10 rounded text-md px-2 mx-3"
                        value="1"
                      />
                      <button
                        class="font-semibold text-xl flex justify-center items-center text-gray-600 dark:text-white hover:text-green-500"
                      >
                        +
                      </button>
                    </div>
                    <div class="pr-8 ">
                      <span class="text-sm font-medium text-gray-600 dark:text-white">$10.50</span>
                    </div>
                    <IconX />
                  </div>
                </div>
                <div
                  class="flex md:justify-between justify-center flex-wrap items-center mt-6 pt-6 "
                >
                  <div class="flex items-center flex-wrap">
                    <img src="https://i.imgur.com/EEguU02.jpg" class="rounded-xl md:w-1/3 w-full" />
                    <div class="flex flex-col md:ml-3 w-full md:w-1/2">
                      <span class="md:text-md font-medium text-center"
                        >Копченый брискет 0.5 кг</span
                      >
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <div class="pr-8 flex justify-center items-center">
                      <button class="font-semibold text-2xl hover:text-green-500">
                        -
                      </button>
                      <input
                        type="text"
                        class="focus:outline-none bg-gray-100 border border-gray-500 h-7 w-10 rounded text-md px-2 mx-3"
                        value="1"
                      />
                      <button
                        class="font-semibold text-xl flex justify-center items-center hover:text-green-500"
                      >
                        +
                      </button>
                    </div>
                    <div class="pr-8 ">
                      <span class="text-sm font-medium">$10.50</span>
                    </div>
                    <IconX />
                  </div>
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
                    Продолжить покупки
                  </AppButton>
                  <AppButton
                    title="Оформить заказ"
                    text="white"
                    variant="green"
                    rounded="2xl"
                    size="sm"
                  >
                    Оформить заказ
                  </AppButton>
                </div>
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
import IconX from '../components/icons/IconX.vue';
import AppButton from '@/components/UI/AppButton.vue';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';

export default {
  name: 'Cart',
  components: {
    IconX,
    AppButton,
    IconArrowLeft,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['']),
  },
  methods: {
    ...mapActions(['']),
  },
};
</script>
