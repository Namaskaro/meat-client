<template>
  <div>
    <div class="py-12">
      <div
        class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl"
      >
        <div class="md:flex ">
          <div class="w-full p-4 px-5 py-5">
            <div class="md:grid md:grid-cols-3 gap-2 ">
              <div class="col-span-3 p-5">
                <h1 class="text-xl font-medium ">Корзина</h1>
                <div
                  class="flex md:justify-between justify-center flex-wrap items-center mt-6 pt-6 "
                >
                  <div class="flex items-center flex-wrap">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      class="rounded-xl md:w-1/3 w-full"
                    />
                    <div class="flex flex-col md:ml-3 w-full md:w-1/2">
                      <span class="md:text-md font-medium text-center"
                        >Копченый брискет 0.5 кг</span
                      >
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <div class="pr-8 flex justify-center items-center">
                      <button
                        class="font-semibold text-2xl hover:text-green-500"
                      >
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
                <div
                  class="flex justify-between items-center pt-6 mt-6 border-t"
                >
                  <div class="flex items-center">
                    <img
                      src="https://i.imgur.com/Uv2Yqzo.jpg"
                      width="120"
                      class="rounded-full "
                    />
                    <div class="flex flex-col ml-3 ">
                      <span class="text-md font-medium w-auto"
                        >Spicy Mexican potatoes</span
                      >
                      <span class="text-xs font-light text-gray-400"
                        >#66999</span
                      >
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <div class="pr-8 flex">
                      <span class="font-semibold">-</span>
                      <input
                        type="text"
                        class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                        value="1"
                      />
                      <span class="font-semibold">+</span>
                    </div>
                    <div class="pr-8">
                      <span class="text-xs font-medium">$10.50</span>
                    </div>
                    <div><i class="fa fa-close text-xs font-medium"></i></div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center mt-6 pt-6 border-t"
                >
                  <div class="flex items-center">
                    <img
                      src="https://i.imgur.com/xbTAITF.jpg"
                      width="60"
                      class="rounded-full "
                    />
                    <div class="flex flex-col ml-3 ">
                      <span class="text-md font-medium">Breakfast</span>
                      <span class="text-xs font-light text-gray-400"
                        >#86577</span
                      >
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <div class="pr-8 flex">
                      <span class="font-semibold">-</span>
                      <input
                        type="text"
                        class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                        value="1"
                      />
                      <span class="font-semibold">+</span>
                    </div>
                    <div class="pr-8">
                      <span class="text-xs font-medium">$10.50</span>
                    </div>
                    <div><i class="fa fa-close text-xs font-medium"></i></div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center mt-6 pt-6 border-t"
                >
                  <div class="flex items-center">
                    <i class="fa fa-arrow-left text-sm pr-2"></i>
                    <span class="text-md font-medium text-blue-500"
                      >Continue Shopping</span
                    >
                  </div>
                  <div class="flex justify-center items-end">
                    <span class="text-sm font-medium text-gray-400 mr-1"
                      >Subtotal:</span
                    >
                    <span class="text-lg font-bold text-gray-800 ">
                      $24.90</span
                    >
                  </div>
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
import IconX from '../components/icons/IconX.vue';

export default {
  name: 'Cart',
  components: {
    IconX,
  },
};
</script>
