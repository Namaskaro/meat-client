<template>
  <div v-if="notification.active" class="flex flex-row p-6 bg-white absolute">
    <button class="delete" @click="toggleNotification"></button>
    {{ notification.message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['notification', 'toggleNotification'],
};
</script>
