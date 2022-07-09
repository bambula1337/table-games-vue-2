<template>
  <div class="special-wrapper">
    <div class="special">
      <p class="main-text">
        {{ mainText }}
      </p>
      <div class="slider-wrapper">
        <SliderDefault :slides="slides" />
      </div>
    </div>
  </div>
</template>

<script>
import SliderDefault from "@/components/SliderDefault/SliderDefault.vue";

export default {
  name: "SpecialComponent",
  components: {
    SliderDefault,
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
    @apply text-xl font-bold px-5 z-10;
    @apply TS:text-3xl;
    margin-bottom: -25px;
  }
  & .slider-wrapper {
    @apply TL:-ml-3.5;
    @media (min-width: 1280px) {
      width: 101.5%;
    }
  }
}
</style>
