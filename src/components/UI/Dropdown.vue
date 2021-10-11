<template>
  <div class="dropdown-wrapper relative">
    <button
      @click="open = !open"
      :class="'bg-' + color + '-500'"
      class="flex flex-row items-center   py-2  text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block z-50"
    >
      <span>Dropdown</span>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        :class="{ 'rotate-180': open, 'rotate-0': !open }"
        class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 bg-bla"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>

    <DropdownItem
      media
      text="white-base"
      color="black-smoky"
      background="grey-cadetBlueCrayola"
      textSize="xl"
      fontWeight="semibold"
      :open="open"
      :items="frameworks"
    />
  </div>
</template>

<script>
import DropdownItem from '@/components/UI/DropdownItem.vue';

export default {
  name: 'Dropdown',
  components: {
    DropdownItem,
  },
  props: {
    color: String,
    animation: String,
    text: String,
  },
  data() {
    return {
      open: false,
      frameworks: ['React', 'Vue', 'Svelte', 'Angular'],
    };
  },
};
</script>

<style lang="postcss" module>
/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Slide-in-right animation*/
.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-right-enter,
.slide-in-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Slide-in-left animation*/
.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-left-enter,
.slide-in-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Scale animation*/
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s;
  transform: scale(1);
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* Rotate animation*/
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s;
  transform: scale(1) rotate(-360deg);
}
.rotate-enter,
.rotate-leave-to {
  opacity: 0;
  transform: scale(0) rotate(360deg);
}
</style>
