<template>
  <div class="slider-default">
    <div class="slider-default-main">
      <div class="navigation-prev" @click="prev">
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.74608 0.79112C1.88925 0.790633 2.0307 0.822231 2.16006 0.883592C2.28941 0.944953 2.40338 1.03452 2.49357 1.1457L7.12232 6.8957C7.26328 7.06718 7.34033 7.28227 7.34033 7.50424C7.34033 7.72622 7.26328 7.94131 7.12232 8.11279L2.33066 13.8628C2.16799 14.0585 1.93424 14.1816 1.68084 14.2049C1.42743 14.2283 1.17512 14.15 0.979409 13.9874C0.783701 13.8247 0.660628 13.591 0.637264 13.3375C0.6139 13.0841 0.692159 12.8318 0.854825 12.6361L5.13857 7.49945L0.998576 2.36279C0.881388 2.22212 0.806947 2.05082 0.784063 1.86917C0.761178 1.68752 0.790807 1.50312 0.869444 1.33778C0.948081 1.17244 1.07243 1.03309 1.22779 0.936207C1.38314 0.839329 1.563 0.78898 1.74608 0.79112Z"
            fill="#2A2A2A"
          />
        </svg>
      </div>
      <div class="slider-wrapper">
        <VueSlickCarousel
          class="slider"
          v-bind="slider.settings"
          ref="carousel"
        >
          <div class="slide-wrapper" v-for="slide in slides" :key="slide.id">
            <ShopDefaultSliderCard :card="slide" />
          </div>
        </VueSlickCarousel>
      </div>
      <div class="navigation-next" @click="next">
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.74608 0.79112C1.88925 0.790633 2.0307 0.822231 2.16006 0.883592C2.28941 0.944953 2.40338 1.03452 2.49357 1.1457L7.12232 6.8957C7.26328 7.06718 7.34033 7.28227 7.34033 7.50424C7.34033 7.72622 7.26328 7.94131 7.12232 8.11279L2.33066 13.8628C2.16799 14.0585 1.93424 14.1816 1.68084 14.2049C1.42743 14.2283 1.17512 14.15 0.979409 13.9874C0.783701 13.8247 0.660628 13.591 0.637264 13.3375C0.6139 13.0841 0.692159 12.8318 0.854825 12.6361L5.13857 7.49945L0.998576 2.36279C0.881388 2.22212 0.806947 2.05082 0.784063 1.86917C0.761178 1.68752 0.790807 1.50312 0.869444 1.33778C0.948081 1.17244 1.07243 1.03309 1.22779 0.936207C1.38314 0.839329 1.563 0.78898 1.74608 0.79112Z"
            fill="#2A2A2A"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import ShopDefaultSliderCard from "@/components/ShopDefaultSliderCard.vue";

export default {
  name: "ShopDefaultSlider",
  components: {
    VueSlickCarousel,
    ShopDefaultSliderCard,
  },
  data() {
    return {
      slider: {
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          centerPadding: "0px",
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1279,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 639,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      },
    };
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  methods: {
    prev: function () {
      this.$refs.carousel.prev();
    },
    next: function () {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-default {
  @apply w-full flex justify-center;
  & .slider-default-main {
    @apply flex items-center font-trebuchet;
    @apply TM:relative;
    & .navigation-prev {
      @apply w-10 h-10 absolute flex justify-center items-center rotate-z-180 z-10;
      @apply TM:-left-7;
    }
    & .slider {
      @apply grid;
      & .slide-wrapper {
        @apply flex justify-center;
        display: flex !important;
      }
    }
    & .navigation-next {
      @apply w-10 h-10 absolute right-0 flex justify-center items-center z-10;
      @apply TM:-right-7;
    }
  }
}
</style>
