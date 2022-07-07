<template>
  <div class="home-slider">
    <VueSlickCarousel class="slider" v-bind="settings">
      <div
        class="slide"
        v-for="slide in slides"
        :key="slide.id"
        :style="slide.style"
      >
        <div class="text-wrapper">
          <p class="main-text">{{ slide.mainText }}</p>
          <p class="sub-text">{{ slide.subText }}</p>
        </div>
        <button-orange-default>
          <p class="detail">Подробнее</p>
        </button-orange-default>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HomeSlider",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          mainText: "Magic: the Gathering",
          subText: "Самая популярная карточная игра",
          url: "",
          style: {
            background: `url(${require("@/assets/images/home-slider/slide_1.jpg")})`,
          },
        },
        {
          id: 2,
          mainText: "Magic: the Gathering",
          subText: "Самая популярная карточная игра",
          url: "",
          style: {
            background: `url(${require("@/assets/images/home-slider/slide_1.jpg")})`,
          },
        },
        {
          id: 3,
          mainText: "Magic: the Gathering",
          subText: "Самая популярная карточная игра",
          url: "",
          style: {
            background: `url(${require("@/assets/images/home-slider/slide_1.jpg")})`,
          },
        },
      ],
      settings: {
        dots: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              variableWidth: false,
              centerMode: false,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home-slider {
  @apply w-%90 font-trebuchet;
  & .slider {
    @apply text-white;
    width: 115%;
    & .slide {
      @apply h-54 flex flex-col justify-center items-start px-2 bg-no-repeat;
      @apply TM:flex-row TM:justify-between TM:items-end TM:pb-8 TM:px-9;
      display: flex !important;
      width: 98% !important;
      background-position: -3.2rem 0rem !important;
      background-size: 41rem !important;
      background-repeat: no-repeat !important;
      @media (min-width: 480px) {
        background-size: 50rem !important;
      }
      @media (min-width: 640px) {
        background-size: 60rem !important;
      }
      @media (min-width: 768px) {
        background-size: 70rem !important;
      }
      @media (min-width: 1024px) {
        @apply mx-1 rounded-xl;
        width: 60vw !important;
        height: 320px !important;
        background-size: 60rem !important;
      }
      @media (min-width: 1280px) {
        background-size: 60rem !important;
        background-position: 0rem 0rem !important;
      }
      @media (min-width: 1600px) {
        background-size: 100% !important;
        background-position: 0rem 0rem !important;
      }

      & .text-wrapper {
        @apply flex flex-col-reverse mb-2;
        @apply TM:mb-0;
        & .main-text {
          @apply font-bold;
          font-size: 26px;
          @media (min-width: 1024px) {
            font-size: 28px;
          }
        }
        & .sub-text {
          @apply text-sm;
        }
      }
      & .detail {
        @apply flex justify-center items-center h-8;
      }
    }
  }
}
</style>
