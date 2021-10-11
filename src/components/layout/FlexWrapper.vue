<template>
  <div class="container mx-auto">
    <section class="">
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 relative">
        <slot name="loader"></slot>
        <slot name="content"></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FlexWrapper',
};
</script>

<style></style>
