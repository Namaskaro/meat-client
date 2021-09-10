<template>
  <div class="py-12">
    <div class="max-w-md mx-auto  rounded-lg md:max-w-5xl">
      <div class="md:flex ">
        <div class="w-full">
          <div class="md:grid md:grid-cols-12 gap-2 ">
            <div class="col-span-7 p-5">
              <form class="max-w-xl m-4 p-6 bg-white rounded-lg shadow-xl">
                <p class="text-gray-800 font-medium">Customer information</p>
                <div class="">
                  <label class="block text-sm text-gray-00" for="cus_name">Имя</label>
                  <input
                    class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
                    type="text"
                    placeholder="Ваше имя"
                    aria-label="Name"
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600">Электронная почта</label>
                  <input
                    class="w-full px-5  py-2 bg-white rounded-lg border border-gray-300"
                    type="text"
                    required=""
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
                  <input
                    class="w-full px-2 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="Street"
                    aria-label="Email"
                  />
                </div>
                <div class="mt-2">
                  <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
                  <input
                    class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="City"
                    aria-label="Email"
                  />
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                  <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                  <input
                    class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="Country"
                    aria-label="Email"
                  />
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                  <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                  <input
                    class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="Zip"
                    aria-label="Email"
                  />
                </div>
                <p class="mt-4 text-gray-800 font-medium">Payment information</p>
                <div class="">
                  <label class="block text-sm text-gray-600" for="cus_name">Card</label>
                  <input
                    class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_name"
                    name="cus_name"
                    type="text"
                    required=""
                    placeholder="Card Number MM/YY CVC"
                    aria-label="Name"
                  />
                </div>
                <div class="mt-4">
                  <button
                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="submit"
                  >
                    $3.00
                  </button>
                </div>
              </form>
            </div>
            <div class="col-span-5">
              <div class="p-6">
                <h1>Products</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
