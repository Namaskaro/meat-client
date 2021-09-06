<template>
  <div
    v-if="notification.active"
    class="flex flex-row p-6 bg-white absolute rounded-xl -top-1.5 border-2"
  >
    <slot name="close">
      <button class="delete" @click="toggleNotification">Delete</button>
    </slot>
    <slot name="message">{{ notification.message }}</slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['notification', 'toggleNotification'],
};
</script>
