<template>
  <div class="container mx-auto">
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlexWrapper',
};
</script>

<style></style>
