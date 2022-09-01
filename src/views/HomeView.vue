<template>
  <div class="home">
    <div class="wrapper-default wrapper-shop-home-slider">
      <ShopHomeSlider :slides="slides" />
    </div>
    <div class="wrapper-default wrapper-shop-catalog">
      <ShopCatalog :categories="categories" />
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
      <ShopInteresting :interesting="interesting" />
    </div>
    <div class="wrapper-default wrapper-shop-about">
      <ShopAbout />
    </div>
    <div class="wrapper-default wrapper-shop-contact">
      <ShopContact :contacts="contacts" />
    </div>
  </div>
</template>

<script>
// Components
import ShopHomeSlider from "@/components/ShopHomeSlider.vue";
import ShopCatalog from "@/components/ShopCatalog.vue";
import ShopSpecial from "@/components/ShopSpecial.vue";
import ShopEvents from "@/components/ShopEvents.vue";
import ShopInteresting from "@/components/ShopInteresting.vue";
import ShopAbout from "@/components/ShopAbout.vue";
import ShopContact from "@/components/ShopContact.vue";

// Vuex
import { mapActions, mapState } from "vuex";

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
  methods: {
    ...mapActions("home", [
      "getSlides",
      "getCategories",
      "getSliders",
      "getCards",
      "getInteresting",
      "getContacts",
    ]),
    loadData: function () {
      this.getSlides();
      this.getCategories();
      this.getSliders();
      this.getCards();
      this.getInteresting();
      this.getContacts();
    },
  },
  computed: {
    ...mapState("home", {
      slides: (state) => state.slides,
      categories: (state) => state.categories,
      sliders: (state) => state.sliders,
      cards: (state) => state.cards,
      interesting: (state) => state.interesting,
      contacts: (state) => state.contacts,
    }),
  },
  created() {
    this.loadData();
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
