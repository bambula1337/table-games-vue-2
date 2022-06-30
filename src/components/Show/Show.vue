<template>
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
    <button-orange-default>
      <p class="button-text">Показать еще</p>
    </button-orange-default>
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
.show {
  @apply flex flex-col justify-center items-center font-trebuchet;
  & .main-text-wrapper {
    @apply self-start ml-5 mb-3.5;
    & .main-text {
      @apply font-bold;
      font-size: 21px;
    }
  }
  & .cards {
    @apply flex self-stretch overflow-scroll mb-4;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
    &::-webkit-scrollbar {
      display: none;
    }
    & .card {
      @apply flex justify-center items-end h-64 bg-no-repeat mx-2;
      border-radius: 9px;
      background-size: 23rem !important;
      background-repeat: no-repeat !important;
      & .text-wrapper {
        @apply w-72 h-30 bg-project-black bg-opacity-80 pl-2.5;
        border-radius: 0 0 9px 9px;
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
  & .button-text {
    @apply flex justify-center items-center font-bold text-white;
    width: 170px;
    height: 37px;
  }
}
</style>
