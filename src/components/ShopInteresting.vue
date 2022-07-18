<template>
  <div class="interesting-wrapper">
    <div class="interesting">
      <p class="main-text">
        {{ interesting.text.main }}
      </p>
      <div class="cards">
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
        <div
          class="card card-pc"
          v-for="card in otherInteresting"
          :key="card.id"
          :style="card.style"
        >
          <div class="text-wrapper">
            <p class="name">
              {{ card.text.name }}
            </p>
            <p class="description">
              {{ card.text.description }}
            </p>
          </div>
        </div>
      </div>
      <button-orange-default class="button">
        <p class="button-text">Узнать больше</p>
      </button-orange-default>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInteresting",
  props: {
    interesting: {
      type: Object,
      required: true,
    },
    otherInteresting: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.interesting-wrapper {
  @apply flex justify-center;
}
.interesting {
  @apply w-full flex flex-col justify-center items-center font-trebuchet px-5;
  @apply TL:max-w-6xl;
  & .main-text {
    @apply self-start text-xl font-bold mb-3.5;
    @apply TS:text-3xl;
  }
  & .cards {
    @apply w-full flex justify-evenly flex-wrap cursor-pointer;
    @apply TL:justify-between;
    & .card {
      @apply w-72 h-84 relative flex justify-center items-end mb-3.5 rounded-project-default;
      background-position: -14rem 0rem !important;
      @apply ML:w-88 ML:h-104;
      @apply TM:w-76;
      @apply TL:w-88;
      @screen ML {
        background-size: 180% !important;
      }
      @screen TM {
        background-size: 210% !important;
        background-position: -20rem 0rem !important;
      }
      &::before {
        @apply w-full h-full absolute bg-black opacity-0 transition-all duration-300;
        content: "";
      }
      &:hover {
        &::before {
          @apply opacity-20;
        }
        & .text-wrapper .name {
          @apply text-project-orange;
        }
      }
      & .text-wrapper {
        @apply w-full bg-project-black bg-opacity-80 text-white pl-2 pt-2 pb-4 z-10 rounded-b-project-default;
        @apply TM:pr-1;
        & .name {
          @apply font-bold transition-all duration-300;
          @apply TS:mb-2;
        }
        & .description {
        }
      }
    }
  }
  & .card-pc {
    display: none !important;
    @screen TM {
      display: flex !important;
    }
  }
  & .button {
    @apply ML:w-42;
    @apply TM:w-60;
    @apply TM:mt-3;
    & .button-text {
      @apply w-full h-8.5 flex justify-center items-center bg-white border-2 border-project-orange rounded-project-default;
      @apply TS:text-base;
      @apply TM:h-14 TM:text-lg;
    }
  }
}
</style>
