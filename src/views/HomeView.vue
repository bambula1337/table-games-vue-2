<template>
  <div class="home">
    <div class="wrapper-default wrapper-home-slider">
      <HomeSlider />
    </div>
    <div class="wrapper-default wrapper-catalog">
      <CatalogMain />
    </div>
    <div class="wrapper-default wrapper-slider-default">
      <SliderDefault />
    </div>
  </div>
</template>

<script>
import HomeSlider from "@/components/HomeSlider/HomeSlider.vue";
import CatalogMain from "@/components/CatalogMain/CatalogMain.vue";
import SliderDefault from "@/components/SliderDefault/SliderDefault.vue";

export default {
  name: "HomeView",
  components: {
    HomeSlider,
    CatalogMain,
    SliderDefault,
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply w-screen overflow-hidden;
  & .wrapper-default {
    @apply mb-5;
  }
  & .wrapper-home-slider {
  }
  & .wrapper-catalog {
  }
  & .wrapper-slider-default {
  }
}
</style>
