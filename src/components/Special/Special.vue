<template>
  <div class="special">
    <p class="main-text">
      {{ mainText }}
    </p>
    <SliderDefault :slides="slides" />
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
.special {
  @apply flex flex-col font-trebuchet;
  & .main-text {
    @apply text-xl font-bold px-5;
    margin-bottom: -25px;
  }
}
</style>
