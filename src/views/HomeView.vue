<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
.home {
  @apply h-340;
  & p {
    @apply text-red-900;
  }
}
</style>
