<template>
  <div
    v-if="notification.active"
    class="flex flex-col p-6 bg-white dark:bg-black text-gray-700 dark:text-white absolute rounded-xl top-50% border-r-4 border-green-400"
  >
    <slot name="message">{{ notification.message }}</slot>
    <slot name="close">
      <div class="flex justify-center mt-3">
        <button class="delete" @click="toggleNotification">
          Delete
        </button>
      </div>
    </slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['notification', 'toggleNotification'],
};
</script>

<style lang="postcss" scoped>
.delete {
  @apply px-1 py-1 bg-green-600 text-white text-base rounded-xl w-24;
}
</style>
