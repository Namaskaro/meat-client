<template>
  <div :class="[$style.banner]"></div>
</template>

<script>
export default {};
</script>

<style lang="postcss" module>
.banner {
  height: calc(100vh - 76px);
  width: 100%;
  background-image: url(../../assets/img/banner.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
