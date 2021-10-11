<template>
  <div class="flex justify-center content-center h-9">
    <div class="iconWrapper">
      <IconLight />
    </div>

    <label for="toogleButton" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <input
          id="toogleButton"
          type="checkbox"
          class="hidden"
          :checked="toggle"
          @change="updateToggle('toggle', $event.target.checked)"
          @click="toggleMode"
        />
        <!-- path -->
        <div class="toggle-path bg-gray-200 w-16 h-7 rounded-full shadow-inner relative"></div>
        <!-- crcle -->
        <div class="toggle-circle absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
      </div>
    </label>
    <div class="iconWrapper">
      <IconDark />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IconLight from '../icons/IconLight.vue';
import IconDark from '../icons/IconDark.vue';

export default {
  name: 'AppToggleTheme',
  components: {
    IconLight,
    IconDark,
  },
  data() {
    return {
      isDark: false,
      toggle: false,
    };
  },
  computed: {
    ...mapGetters(['theme']),
  },
  methods: {
    toggleMode() {
      this.$store.dispatch('toggleTheme');
    },
    openStorage() {
      if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('toggle'));
      }
    },
    saveStorage(toggle) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('toggle', JSON.stringify(toggle));
      }
    },
    updateToggle(toggle, value) {
      this.toggle = value;

      let storedToggle = this.openStorage(); // extract stored form
      if (!storedToggle) storedToggle = ''; // if none exists, default to empty object

      storedToggle = value; // store new value
      this.saveStorage(storedToggle); // save changes into localStorage
    },
  },
  created() {
    const storedToggle = this.openStorage();
    if (storedToggle) {
      this.toggle = storedToggle;
    }
  },
};
</script>

<style lang="css" scoped>
.iconWrapper {
  display: inline-flex;
  height: 2.25rem;
  width: 2.25rem;
  justify-content: center;
  align-items: center;
}
.toggle-path {
  transition: background 0.3s ease-in-out;
}
.toggle-circle {
  top: 0.1rem;

  left: 0.25rem;
  transition: all 0.3s ease-in-out;
}
input:checked ~ .toggle-circle {
  transform: translateX(130%);
}
input:checked ~ .toggle-path {
  background-color: #81e6d9;
}
</style>
