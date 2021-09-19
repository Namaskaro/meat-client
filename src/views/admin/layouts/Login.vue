<template>
  <div class="flex">
    <form class="max-w-xl m-4 p-6 bg-white rounded-lg shadow-xl" @submit.prevent="console.log('Вы все оплатили')">
      <p class="text-gray-800 font-medium">Customer information</p>
      <div class="mt-2">
        <label class="block text-sm text-gray-00">Имя</label>
        <input
          class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
          type="text"
          placeholder="Ваше имя"
          aria-label="Name"
          v-model="name"
        />
      </div>
      <div class="mt-2">
        <label class="block text-sm text-gray-00">Пароль</label>
        <input
          class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
          type="password"
          placeholder="Пароль"
          aria-label="Пароль"
          v-model="password"
        />
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
</template>

<script>
export default {
  name: 'Login',
};
</script>
