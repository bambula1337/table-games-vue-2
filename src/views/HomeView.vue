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
    <div class="wrapper-default wrapper-show">
      <ShowComponent :cards="cards" />
    </div>
    <div class="wrapper-default wrapper-interesting">
      <InterestingComponent :interesting="interesting" />
    </div>
    <div class="wrapper-default wrapper-about">
      <AboutComponent />
    </div>
    <div class="wrapper-default wrapper-contact">
      <ContactComponent />
    </div>
  </div>
</template>

<script>
//Components
import HomeSlider from "@/components/HomeSlider/HomeSlider.vue";
import CatalogMain from "@/components/CatalogMain/CatalogMain.vue";
import SpecialComponent from "@/components/Special/Special.vue";
import ShowComponent from "@/components/Show/Show.vue";
import InterestingComponent from "@/components/Interesting/Interesting.vue";
import AboutComponent from "@/components/About/About.vue";
import ContactComponent from "@/components/Contact/Contact.vue";

export default {
  name: "HomeView",
  components: {
    HomeSlider,
    CatalogMain,
    SpecialComponent,
    ShowComponent,
    InterestingComponent,
    AboutComponent,
    ContactComponent,
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
      cards: [
        {
          id: 1,
          name: "Halloween c GoldFish",
          img: "",
          time: "31 октября 2021 г. 19:00",
          description:
            "Мы соберемся,чтобы узнать,кто же все-таки был Мафией и что будет с тем,кого убили..",
          style: {
            background: `url(${require("@/assets/images/show/card_1.jpg")})`,
          },
        },
        {
          id: 2,
          name: "Halloween c GoldFish",
          img: "",
          time: "31 октября 2021 г. 19:00",
          description:
            "Мы соберемся,чтобы узнать,кто же все-таки был Мафией и что будет с тем,кого убили..",
          style: {
            background: `url(${require("@/assets/images/show/card_1.jpg")})`,
          },
        },
      ],
      interesting: {
        text: {
          main: "Интересная информация",
          name: "Аэронавтика Империалис: введение в игру",
          description: "Детально ознакомимся с правилами игры",
        },
        style: {
          background: `url(${require("@/assets/images/interesting/interesting_1.jpg")})`,
        },
        url: "",
      },
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
  & .wrapper-show {
    @apply mb-10;
  }
  & .wrapper-interesting {
    @apply mb-8;
  }
  & .wrapper-about {
  }
  & .wrapper-contact {
  }
}
</style>
