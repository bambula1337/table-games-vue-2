<template>
  <div class="special-wrapper">
    <div class="special">
      <p class="main-text">
        {{ mainText }}
      </p>
      <div class="slider-wrapper">
        <ShopDefaultSlider :slides="slides" />
      </div>
    </div>
  </div>
</template>

<script>
import ShopDefaultSlider from "@/components/ShopDefaultSlider.vue";

export default {
  name: "ShopSpecial",
  components: {
    ShopDefaultSlider,
  },
  props: {
    mainText: {
      type: String,
      reuired: true,
    },
    slides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.special-wrapper {
  @apply w-full flex flex-col items-center;
}
.special {
  @apply flex flex-col font-trebuchet;
  @apply ML:mb-5;
  @apply TS:mb-10;
  @apply TM:max-w-6xl;
  & .main-text {
    @apply text-xl font-bold -mb-6 px-5 z-10;
    @apply TS:text-3xl;
  }
  & .slider-wrapper {
    @apply TL:w-%101.5 TL:-ml-3.5;
  }
}
</style>
