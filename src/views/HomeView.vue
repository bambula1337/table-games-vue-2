<template>
  <div class="home">
    <div class="wrapper-default wrapper-home-slider">
      <HomeSlider />
    </div>
  </div>
</template>

<script>
import HomeSlider from "@/components/HomeSlider/HomeSlider.vue";

export default {
  name: "HomeView",
  components: {
    HomeSlider,
  },
};
</script>

<style lang="scss" scoped>
.home {
  & .wrapper-default {
  }
  & .wrapper-home-slider {
  }
}
</style>
