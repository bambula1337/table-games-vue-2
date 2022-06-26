<template>
  <button class="button-orange-default">
    <div class="slot">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "ButtonOrangeDefault",
};
</script>

<style lang="scss" scoped>
.button-orange-default {
  @apply w-42 text-sm font-bold bg-gradient-to-t from-project-orange-dark to-project-orange rounded-lg transition-all duration-300;
  & .slot {
    @apply bg-white rounded-lg bg-opacity-0 transition-all duration-300;
  }
  &:hover .slot {
    @apply LS:bg-opacity-20;
  }
}
</style>
