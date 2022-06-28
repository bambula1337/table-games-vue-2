<template>
  <div class="home">
    <div class="wrapper-default wrapper-home-slider">
      <HomeSlider />
    </div>
    <div class="wrapper-default wrapper-catalog">
      <CatalogMain />
    </div>
    <div
      class="wrapper-default wrapper-special"
      v-for="slider in sliders"
      :key="slider.id"
    >
      <SpecialComponent :mainText="slider.text" :slides="slider.slides" />
    </div>
  </div>
</template>

<script>
import HomeSlider from "@/components/HomeSlider/HomeSlider.vue";
import CatalogMain from "@/components/CatalogMain/CatalogMain.vue";
import SpecialComponent from "@/components/Special/Special.vue";

export default {
  name: "HomeView",
  components: {
    HomeSlider,
    CatalogMain,
    SpecialComponent,
  },
  data() {
    return {
      sliders: [
        {
          id: 1,
          text: "Успей купить",
          slides: [
            {
              id: 1,
              mainUrl: "",
              name: "Warhammer 40,000: Chaos Space Marines",
              img: {
                url: "images/special/slide_1.png",
              },
              limits: {
                players: "2-4",
                time: "30-60",
                age: "18+",
              },
              price: {
                old: 4350,
                new: 3657,
              },
            },
            {
              id: 2,
              mainUrl: "",
              name: "Warhammer 40,000: Chaos Space Marines",
              img: {
                url: "images/special/slide_1.png",
              },
              limits: {
                players: "2-4",
                time: "30-60",
                age: "18+",
              },
              price: {
                old: 4350,
                new: 3657,
              },
            },
            {
              id: 3,
              mainUrl: "",
              name: "Warhammer 40,000: Chaos Space Marines",
              img: {
                url: "images/special/slide_1.png",
              },
              limits: {
                players: "2-4",
                time: "30-60",
                age: "18+",
              },
              price: {
                old: 4350,
                new: 3657,
              },
            },
            {
              id: 4,
              mainUrl: "",
              name: "Warhammer 40,000: Chaos Space Marines",
              img: {
                url: "images/special/slide_1.png",
              },
              limits: {
                players: "2-4",
                time: "30-60",
                age: "18+",
              },
              price: {
                old: 4350,
                new: 3657,
              },
            },
          ],
        },
        {
          id: 2,
          text: "Специальное предложение",
          slides: [
            {
              id: 1,
              mainUrl: "",
              name: "Warhammer 40,000: Chaos Space Marines",
              img: {
                url: "images/special/slide_1.png",
              },
              limits: {
                players: "2-4",
                time: "30-60",
                age: "18+",
              },
              price: {
                old: 4350,
                new: 3657,
              },
            },
            {
              id: 2,
              mainUrl: "",
              name: "Warhammer 40,000: Chaos Space Marines",
              img: {
                url: "images/special/slide_1.png",
              },
              limits: {
                players: "2-4",
                time: "30-60",
                age: "18+",
              },
              price: {
                old: 4350,
                new: 3657,
              },
            },
            {
              id: 3,
              mainUrl: "",
              name: "Warhammer 40,000: Chaos Space Marines",
              img: {
                url: "images/special/slide_1.png",
              },
              limits: {
                players: "2-4",
                time: "30-60",
                age: "18+",
              },
              price: {
                old: 4350,
                new: 3657,
              },
            },
            {
              id: 4,
              mainUrl: "",
              name: "Warhammer 40,000: Chaos Space Marines",
              img: {
                url: "images/special/slide_1.png",
              },
              limits: {
                players: "2-4",
                time: "30-60",
                age: "18+",
              },
              price: {
                old: 4350,
                new: 3657,
              },
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply w-screen overflow-hidden;
  & .wrapper-default {
    @apply mb-5;
  }
  & .wrapper-home-slider {
  }
  & .wrapper-catalog {
    @apply mb-7;
  }
  & .wrapper-special {
    @apply -mb-2;
  }
}
</style>
