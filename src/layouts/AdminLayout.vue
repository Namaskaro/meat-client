<template>
  <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
    <AdminHeader />
    <AdminSidebar />
    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
      <router-view />
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/AdminHeader.vue';
import AdminSidebar from '@/components/admin/AdminSidebar.vue';

export default {
  components: {
    AdminHeader,
    AdminSidebar,
  },
};
</script>
