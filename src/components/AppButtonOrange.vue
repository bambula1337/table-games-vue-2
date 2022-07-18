<template>
  <button class="app-button-orange-default">
    <div class="slot">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "AppButtonOranget",
};
</script>

<style lang="scss" scoped>
.app-button-orange-default {
  @apply w-42 text-sm font-bold bg-gradient-to-t from-project-orange-dark to-project-orange rounded-lg transition-all duration-300;
  & .slot {
    @apply flex items-center justify-center bg-white bg-opacity-0 rounded-lg transition-all duration-300;
  }
  &:hover .slot {
    @apply LS:bg-opacity-20;
  }
}
</style>
