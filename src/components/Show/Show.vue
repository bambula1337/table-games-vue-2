<template>
  <div class="show-wrapper">
    <div class="show">
      <div class="main-text-wrapper">
        <p class="main-text">Ближайшие мероприятия</p>
      </div>
      <div class="cards">
        <div
          class="card"
          v-for="card in cards"
          :key="card.id"
          :style="card.style"
        >
          <div class="text-wrapper">
            <div class="top-content">
              <p class="name">
                {{ card.name }}
              </p>
              <p class="time">
                {{ card.time }}
              </p>
            </div>
            <div class="bottom-content">
              <p class="sub-text">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button-orange-default class="button">
        <p class="button-text">Показать еще</p>
      </button-orange-default>
    </div>
  </div>
</template>

<script>
import ButtonOrangeDefault from "../Global/Buttons/ButtonOrangeDefault.vue";
export default {
  components: { ButtonOrangeDefault },
  name: "ShowComponent",
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$el.querySelector(".cards").scrollLeft = 60;
  },
};
</script>

<style lang="scss" scoped>
.show-wrapper {
  @apply w-full flex justify-center;
}
.show {
  @apply flex flex-col justify-center items-center font-trebuchet;
  @apply w-full;
  @apply TL:max-w-6xl TL:px-5;
  & .main-text-wrapper {
    @apply self-start ml-5 mb-3.5;
    @apply TL:ml-0;
    & .main-text {
      @apply font-bold;
      font-size: 21px;
      @apply TS:text-3xl;
    }
  }
  & .cards {
    @apply flex self-stretch overflow-scroll mb-4;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
    @apply ML:justify-center;
    &::-webkit-scrollbar {
      display: none;
    }
    & .card {
      @apply h-64 flex justify-center items-end relative bg-no-repeat mx-2 cursor-pointer;
      border-radius: 9px;
      background-size: 23rem !important;
      background-repeat: no-repeat !important;
      @apply TM:h-80;
      @apply TL:h-90 TL:mr-5 TL:ml-0;
      @media (min-width: 1024px) {
        background-size: 30rem !important;
      }
      @media (min-width: 1280px) {
        background-size: 100% !important;
        &:last-child {
          @apply TL:mr-2;
        }
      }
      &::before {
        @apply w-full h-full absolute bg-black opacity-0 transition-all duration-300;
        content: "";
        border-radius: 9px;
      }
      &:hover::before {
        @apply opacity-20;
      }
      & .text-wrapper {
        @apply w-72 bg-project-black bg-opacity-80 pl-2.5 p-2 z-10;
        border-radius: 0 0 9px 9px;
        @apply MM:w-76;
        @apply TS:w-88;
        @apply TM:w-116;
        @apply TL:w-full;
        & .top-content {
          @apply flex justify-between flex-wrap mb-1.5;
          & .name {
            @apply font-bold text-project-orange;
          }
          & .time {
            @apply text-sm text-white;
          }
        }
        & .bottom-content {
          @apply pr-10;
          & .sub-text {
            @apply text-sm text-white;
          }
        }
      }
    }
  }
  & .button {
    @apply TM:w-60 TM:mt-3;
  }
  & .button-text {
    @apply flex justify-center items-center font-bold text-white;
    height: 37px;
    @apply TM:text-lg TM:h-14;
  }
}
</style>
