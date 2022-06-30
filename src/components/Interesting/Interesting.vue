<template>
  <div class="interesting">
    <p class="main-text">
      {{ interesting.text.main }}
    </p>
    <div class="card" :style="interesting.style">
      <div class="text-wrapper">
        <p class="name">
          {{ interesting.text.name }}
        </p>
        <p class="description">
          {{ interesting.text.description }}
        </p>
      </div>
    </div>
    <button-orange-default>
      <p class="button-text">Узнать больше</p>
    </button-orange-default>
  </div>
</template>

<script>
import ButtonOrangeDefault from "../Global/Buttons/ButtonOrangeDefault.vue";
export default {
  components: { ButtonOrangeDefault },
  name: "InterestingComponent",
  props: {
    interesting: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.interesting {
  @apply flex flex-col justify-center items-center font-trebuchet px-5;
  & .main-text {
    @apply self-start font-bold mb-3.5;
    font-size: 21px;
  }
  & .card {
    @apply w-72 h-84 flex justify-center items-end mb-3.5;
    background-position: -14rem 0rem !important;
    background-repeat: no-repeat !important;
    border-radius: 9px;
    & .text-wrapper {
      @apply bg-project-black bg-opacity-80 text-white pl-2 pb-4 pt-2;
      border-radius: 0 0 9px 9px;
      & .name {
        @apply font-bold;
      }
      & .description {
      }
    }
  }
  & .button-text {
    @apply w-full flex justify-center items-center bg-white border-2 border-project-orange;
    height: 34px;
    border-radius: 9px;
  }
}
</style>
