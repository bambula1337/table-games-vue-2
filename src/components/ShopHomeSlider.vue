<template>
  <div class="home-slider">
    <VueSlickCarousel class="slider" v-bind="slider.settings">
      <div
        class="slide"
        v-for="slide in slider.slides"
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
  name: "ShopHomeSlider",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      slider: {
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
              breakpoint: 1023,
              settings: {
                variableWidth: false,
                centerMode: false,
              },
            },
          ],
        },
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
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home-slider {
  @apply w-%90 font-trebuchet;
  & .slider {
    @apply w-%115 text-white;
    & .slide {
      @apply h-54 flex flex-col justify-center items-start bg-no-repeat px-2;
      @apply TM:flex-row TM:justify-between TM:items-end TM:px-9 TM:pb-8;
      width: 98% !important;
      display: flex !important;
      background-size: 41rem !important;
      background-position: -3.2rem 0rem !important;
      @screen MM {
        background-size: 50rem !important;
      }
      @screen ML {
        background-size: 60rem !important;
      }
      @screen TS {
        background-size: 70rem !important;
      }
      @screen TM {
        @apply mx-1 rounded-xl;
        width: 60vw !important;
        height: 320px !important;
        background-size: 60rem !important;
      }
      @screen TL {
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
          @apply text-2xl font-bold;
          @screen TM {
            @apply text-3xl;
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
