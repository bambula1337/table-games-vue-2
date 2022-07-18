<template>
  <div class="home">
    <div class="wrapper-default wrapper-shop-home-slider">
      <ShopHomeSlider />
    </div>
    <div class="wrapper-default wrapper-shop-catalog">
      <ShopCatalog />
    </div>
    <div
      class="wrapper-default wrapper-shop-special"
      v-for="slider in sliders"
      :key="slider.id"
    >
      <ShopSpecial :mainText="slider.text" :slides="slider.slides" />
    </div>
    <div class="wrapper-default wrapper-shop-events">
      <ShopEvents :cards="cards" />
    </div>
    <div class="wrapper-default wrapper-shop-interesting">
      <ShopInteresting
        :interesting="interesting.interestingMain"
        :other-interesting="interesting.otherInteresting"
      />
    </div>
    <div class="wrapper-default wrapper-shop-about">
      <ShopAbout />
    </div>
    <div class="wrapper-default wrapper-shop-contact">
      <ShopContact />
    </div>
  </div>
</template>

<script>
//Components
import ShopHomeSlider from "@/components/ShopHomeSlider.vue";
import ShopCatalog from "@/components/ShopCatalog.vue";
import ShopSpecial from "@/components/ShopSpecial.vue";
import ShopEvents from "@/components/ShopEvents.vue";
import ShopInteresting from "@/components/ShopInteresting.vue";
import ShopAbout from "@/components/ShopAbout.vue";
import ShopContact from "@/components/ShopContact.vue";

export default {
  name: "HomeView",
  components: {
    ShopHomeSlider,
    ShopCatalog,
    ShopSpecial,
    ShopEvents,
    ShopInteresting,
    ShopAbout,
    ShopContact,
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
            {
              id: 5,
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
            {
              id: 5,
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
        interestingMain: {
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
        otherInteresting: [
          {
            id: 1,
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
          {
            id: 2,
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
        ],
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
  & .wrapper-shop-home-slider {
    @apply TM:mb-8;
  }
  & .wrapper-shop-catalog {
    @apply mb-7;
    @apply TM:mb-20;
  }
  & .wrapper-shop-special {
    @apply -mb-2;
    @apply TM:mb-1;
  }
  & .wrapper-shop-events {
    @apply mt-2 mb-10;
    @apply TM:mb-20;
  }
  & .wrapper-shop-interesting {
    @apply mb-8;
    @apply TM:mb-20;
  }
  & .wrapper-shop-about {
    @apply mb-8;
    @apply TM:mb-20;
  }
  & .wrapper-shop-contact {
  }
}
</style>
