<template>
  <div class="flex h-screen justify-center items-start content-center">
    <form @submit.prevent="handleLogin" class="w-1/3 h-1/4 mt-48 p-8 bg-white rounded-lg shadow-xl">
      <div class="mt-2">
        <label class=" text-sm block text-gray-600">Логин</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Логин" aria-label="Login" v-model="login" />
      </div>
      <div class="mt-2 mb-3">
        <label class=" text-sm block text-gray-600">Пароль</label>
        <input
          class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          type="password"
          placeholder="Адрес"
          aria-label="Password"
          v-model="password"
        />
      </div>
      <AppButton text="white" variant="green" rounded="2xl" size="md" class="w-full">
        Войти
      </AppButton>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import AppButton from '@/components/UI/AppButton.vue';

export default {
  name: 'Login',
  components: {
    AppButton,
  },
  data() {
    return {
      formData: {
        login: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: 'admin/signIn',
    }),
    async handleLogin() {
      await this.signIn({ login: this.login, password: this.password });
      this.$router.push({ name: 'admin' });
    },
  },
};
</script>
