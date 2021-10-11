<template>
  <div class="flex justify-center px-6 my-12">
    <!-- Row -->
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <!-- Col -->
      <div
        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
        style="background-image: url('https://images.unsplash.com/photo-1624385019951-983e0de9e549?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80')"
      ></div>
      <!-- Col -->
      <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 class="pt-4 text-2xl text-center">Введите данные для регистрации</h3>
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div class="mb-4 md:mr-2 md:mb-0">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
              Имя
            </label>
            <input
              class="w-full px-5  py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Ваше имя"
              v-model="username"
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
              Электронная почта
            </label>
            <input
              class="w-full px-5  py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Электронная почта"
              v-model="email"
            />
          </div>

          <div class="mb-4 md:mr-2 md:mb-0">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
              Пароль
            </label>
            <input
              class="w-full px-5  py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Пароль"
              v-model="password"
            />
          </div>

          <div class="mb-6 mt-6 text-center">
            <AppButton text="white" variant="green" rounded="xl" size="full">
              Регистрация
            </AppButton>
          </div>
          <hr class="mb-6 border-t" />
          <div class="text-center">
            <router-link :to="{ name: 'userlogin' }" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
              Уже есть аккаунт? Авторизуйтесь!
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import AppButton from '@/components/UI/AppButton.vue';

export default {
  name: 'Register',
  components: {
    AppButton,
  },
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    return {
      name,
      email,
      password,
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      email: {
        required,
        email,
      },
      name: {
        required,
        min: minLength(3),
      },
      password: {
        required,
        min: minLength(6),
      },
    };
  },
};
</script>
