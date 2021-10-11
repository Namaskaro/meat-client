<template>
  <div v-if="notification.active" class="notification ">
    <slot name="message">{{ notification.message }}</slot>
    <slot name="close">
      <div class="flex justify-center mt-3">
        <button class="delete" @click="toggleNotification">
          <IconX />
        </button>
      </div>
    </slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
import IconX from '@/components/icons/IconX.vue';

export default {
  name: 'Notification',
  components: {
    IconX,
  },
  props: ['notification', 'toggleNotification'],
};
</script>

<style lang="postcss" scoped>
.notification {
  @apply flex flex-col p-6 bg-white fixed rounded-xl left-2/4 translate-x-2/4 top-0 border-r-4 text-gray-700;
}
.notification:dark {
  @apply bg-black text-white;
}
</style>
