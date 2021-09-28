<template>
  <div class="flex">
    <form class="max-w-xl m-4 p-6 bg-white rounded-lg shadow-xl" @submit.prevent="handleLogin">
      <div class="mt-2">
        <label class="block text-sm text-gray-00">Имя</label>
        <input
          class="w-full px-5 py-2 text-gray-700 bg-white rounded-lg border border-gray-300"
          type="text"
          placeholder="Ваше имя"
          aria-label="Name"
          v-model="login"
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
            Войти
          </router-link>
        </AppButton>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    ...mapActions({
      login: 'admin/login',
    }),
    async handleLogin() {
      await this.login({ login, password });
      this.router.push({ name: 'admin' });
    },
  },
};
</script>
