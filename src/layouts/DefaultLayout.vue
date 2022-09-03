<template>
  <div class="default-layout">
    <TheHeader />
    <div class="view">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
// Components
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "DefaultLayout.vue",
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    console.log("DefaultLayout has been mounted");
  },
  beforeDestroy() {
    console.log("DefaultLayout has been destroyed");
  },
};
</script>

<style lang="scss" scoped>
.view {
  @apply min-h-screen;
}
</style>
