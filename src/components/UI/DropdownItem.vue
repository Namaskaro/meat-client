<template>
  <!-- <transition :name="animation"> -->
  <div
    :class="'bg-' + color"
    class="rounded absolute shadow-lg z-50"
    v-if="open"
  >
    <ul class="list-none overflow-hidden rounded p-2">
      <li
        v-for="item in items"
        :key="item"
        class="cursor-pointer z-50 flex flex-row items-center"
        :class="[
          'text-' + text,
          'text-' + textSize,
          'font-' + fontWeight,
          'hover:bg-' + background + '-600',
        ]"
      >
        <template v-if="media">
          <div
            class="flex relative w-8 h-8 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"
          >
            <img
              class="rounded-full"
              alt="A"
              src="https://randomuser.me/api/portraits/women/68.jpg"
            />
          </div>
        </template>
        <router-view
          href=""
          class="flex py-2 px-4 transition duration-300 z-50 bg"
          >{{ item }}</router-view
        >
      </li>
    </ul>
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: 'DropdownItem',
  props: {
    media: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: false,
    },
    fontWeight: {
      type: String,
      required: false,
    },
    textSize: {
      type: [String, Number],
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: () => 'black',
    },
    background: {
      type: String,
      required: false,
      default: () => 'white',
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    open: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
<style lang="postcss" module>
/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 1;
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
