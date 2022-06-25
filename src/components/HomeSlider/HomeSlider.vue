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
        <button class="route">Подробнее</button>
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
      display: flex !important;
      width: 98% !important;
      background-position: -3.2rem 0rem !important;
      background-size: 41rem !important;
      background-repeat: no-repeat !important;
      & .text-wrapper {
        @apply flex flex-col-reverse mb-2;
        & .main-text {
          @apply font-bold;
          font-size: 26px;
        }
        & .sub-text {
          @apply text-sm;
        }
      }
      & .route {
        @apply w-34 h-8 text-sm font-bold bg-gradient-to-t from-project-orange-dark to-project-orange rounded-lg;
      }
    }
  }
}
</style>
